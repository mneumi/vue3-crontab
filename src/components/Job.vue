<template>
  <tr>
    <th>
      <div>{{ index + 1 }}</div>
    </th>
    <td>
      <div>{{ job.name }}</div>
    </td>
    <td>
      <div>{{ job.command }}</div>
    </td>
    <td>
      <div>{{ job.cronexpr }}</div>
    </td>
    <td>{{ job.worker_id }}</td>
    <td>
      <div class="btn-group">
        <button class="btn bg-blue-900 text-white" @click="onEditClick">
          编辑
        </button>
        <button class="btn bg-red-600 text-white" @click="onDelClick">
          删除
        </button>
        <button class="btn bg-teal-500 text-white" @click="onAbortClick">
          终止
        </button>
        <button class="btn bg-green-600 text-white" @click="onExecuteLog(job)">
          查看日志
        </button>
      </div>
    </td>
  </tr>
  <!-- 编辑 -->
  <Edit
    title="编辑任务"
    :job="job"
    :opened="editOpened"
    @confirm="onEditConfirm"
    @cancel="onEditCancel"
  />
  <!-- 删除 -->
  <Modal
    title="注意！"
    confirm-text="删除"
    :opened="delOpened"
    :hide-cancel="false"
    @confirm="onExecuteDelete(job)"
    @cancel="onDelCancel"
  >
    <div>确定要删除吗？</div>
  </Modal>
  <!-- 终止 -->
  <Modal
    title="注意！"
    confirm-text="终止"
    :opened="abortOpened"
    :hide-cancel="false"
    @confirm="onExecuteAbort(job)"
    @cancel="onAbortCancel"
  >
    <div>确定要终止吗？</div>
  </Modal>
  <!-- 查看日志 -->
  <Modal
    large
    title="仅展示最新10条日志"
    confirm-text="关闭"
    :opened="logOpened"
    :hide-cancel="true"
    @confirm="onLogConfirm"
  >
    <LogTable :log-list="logList" />
  </Modal>
</template>

<script setup lang="ts">
import Modal from "./Modal.vue"
import LogTable from "./LogTable.vue"
import Edit from "./Edit.vue"

import { ref } from "vue"
import { deleteJob, abortJob, listLogs } from "@/apis"
import { useModal } from "@/hooks"
import type { IJob, ILog } from "@/types"

defineProps<{
  index: number
  job: IJob
}>()

const [editOpened, onEditClick, onEditConfirm, onEditCancel] = useModal()
const [delOpened, onDelClick, onDelConfirm, onDelCancel] = useModal()
const [abortOpened, onAbortClick, onAbortConfirm, onAbortCancel] = useModal()
const [logOpened, onLogClick, onLogConfirm] = useModal()

const onExecuteDelete = async (job: IJob) => {
  await deleteJob(job)
  onDelConfirm()
}

const onExecuteAbort = async (job: IJob) => {
  await abortJob(job)
  onAbortConfirm()
}

const logList = ref<ILog[]>([])
const onExecuteLog = async (job: IJob) => {
  logList.value = await listLogs(job)
  onLogClick()
}
</script>

<style scoped></style>
