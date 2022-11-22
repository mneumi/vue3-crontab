<template>
  <Modal
    :title="title"
    @confirm="confirm"
    @cancel="cancel"
    :opened="opened"
    :hide-cancel="false"
    confirm-text="提交"
  >
    <div class="flex flex-col w-full">
      <input
        type="text"
        placeholder="请输入任务名称（唯一）"
        class="input w-full mb-3 input-accent"
        v-model="job.name"
      />
      <input
        type="text"
        placeholder="请输入Shell命令"
        class="input w-full mb-3 input-accent"
        v-model="job.command"
      />
      <input
        type="text"
        placeholder="请输入Cron表达式"
        class="input w-full mb-3 input-accent"
        v-model="job.cronexpr"
      />
      <div class="font-bold mt-6 mb-6">工作节点选择</div>
      <div class="flex flex-col">
        <div class="flex">
          <div class="flex">
            <input
              class="radio radio-accent mr-2 mb-4"
              type="radio"
              v-model="job.lb"
              value="random"
            />随机
          </div>
          <div class="flex">
            <input
              class="radio radio-accent ml-6 mr-2 mb-4"
              type="radio"
              v-model="job.lb"
              value="robin"
            />轮询
          </div>
        </div>
        <div class="divider mt-1"></div>
        <div class="flex flex-wrap">
          <template v-for="worker in store.workers">
            <div class="flex">
              <input
                class="radio radio-accent flex mr-2 mb-4"
                type="radio"
                v-model="job.lb"
                :value="worker.id"
              />
              <div class="mr-6">{{ worker.name }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from "./Modal.vue"

import { reactive } from "vue"
import { IJob } from "@/types"
import { getStore } from "@/store"
import { saveJob } from "@/apis"

const props = defineProps<{
  title: string
  opened: boolean
  job?: IJob
}>()
const emits = defineEmits(["confirm", "cancel"])
const store = getStore()

const job = reactive<IJob>({
  name: props.job ? props.job.name : "",
  command: props.job ? props.job.command : "",
  cronexpr: props.job ? props.job.cronexpr : "",
  worker_id: props.job ? props.job.worker_id : "",
  lb: props.job ? props.job.lb : "random"
})
if (job.worker_id !== "") {
  job.lb = job.worker_id
}

const cancel = () => {
  emits("cancel")
}
const confirm = async () => {
  emits("confirm")
  await saveJob(job)
}
</script>

<style scoped></style>
