<template>
  <div class="flex flex-col pl-6 pr-6">
    <div class="font-bold text-3xl mb-6 flex items-center">
      <div class="mr-6">任务信息</div>
      <div class="btn btn-accent" @click="onCreateClick">新建任务</div>
    </div>
    <div class="h-[27rem] rounded-xl overflow-auto">
      <JobList :jobs="jobs" />
    </div>
  </div>
  <Edit
    title="新建任务"
    :opened="createOpened"
    @confirm="onCreateConfirm"
    @cancel="onCreateCancel"
  />
</template>

<script setup lang="ts">
import JobList from "@/components/JobList.vue"
import Edit from "@/components/Edit.vue"

import { ref, onMounted } from "vue"
import { listJobs } from "@/apis"
import { useModal } from "@/hooks"
import type { IJob } from "@/types"

const jobs = ref<IJob[]>([])

onMounted(async () => {
  jobs.value = await listJobs()
})

const [createOpened, onCreateClick, onCreateConfirm, onCreateCancel] =
  useModal()
</script>

<style scoped></style>
