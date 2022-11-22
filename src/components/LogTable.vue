<template>
  <template v-if="logList.length <= 0">
    <div class="flex justify-center items-center w-full font-bold text-4xl">
      暂无执行日志
    </div>
  </template>
  <template v-else>
    <div class="overflow-x-auto">
      <table class="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>任务名</th>
            <th>shell命令</th>
            <th>cron表达式</th>
            <th>工作节点</th>
            <th>负载均衡模式</th>
            <th>处理结果</th>
            <th>错误</th>
            <th>开始时间</th>
            <th>结束时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="log in logList">
            <th></th>
            <th>{{ log.name }}</th>
            <th>{{ log.command }}</th>
            <th>{{ log.cronexpr }}</th>
            <th>{{ log.worker_id }}</th>
            <th>{{ log.lb }}</th>
            <th>{{ log.result }}</th>
            <th>{{ log.error }}</th>
            <th>{{ transformTimestamp(log.start_timestamp) }}</th>
            <th>{{ transformTimestamp(log.end_timestamp) }}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
</template>

<script setup lang="ts">
import type { ILog } from "@/types"

defineProps<{
  logList: ILog[]
}>()

const transformTimestamp = (timestamp: string) => {
  return new Date(parseInt(timestamp) * 1000).toLocaleString()
}
</script>

<style scoped></style>
