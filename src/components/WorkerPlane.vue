<template>
  <div class="flex flex-col pl-6 pt-6 pr-6">
    <div class="font-bold text-3xl">集群节点信息</div>
    <div class="flex overflow-auto">
      <template v-for="worker in store.workers">
        <Worker :worker="worker" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import Worker from "@/components/Worker.vue"

import { onMounted } from "vue"
import { listWorkers } from "@/apis"
import { getStore } from "@/store"

const store = getStore()

onMounted(async () => {
  const result = await listWorkers()
  store.setWorkers(result)
})
</script>

<style scoped></style>
