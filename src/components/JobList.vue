<template>
  <div class="overflow-auto flex">
    <table class="table table-zebra w-full table-normal">
      <thead>
        <tr>
          <th></th>
          <th>任务名称</th>
          <th>shell命令</th>
          <th>cron表达式</th>
          <th>当前所属节点</th>
          <th>任务操作</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(job, index) in jobs" :key="job.name">
          <Job :index="index" :job="job" />
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import Job from "@/components/Job.vue"

import type { IJob } from "@/types"

defineProps<{
  jobs: IJob[]
}>()
</script>

<style scoped></style>
