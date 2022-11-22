<template>
  <div class="p-6 mt-6 mr-6 bg-white rounded-2xl flex flex-col">
    <div class="font-bold text-xl">{{ worker.name }}</div>
    <div class="mt-2 mb-2">IP: {{ worker.ip }}</div>
    <span class="badge badge-md bg-green-700 text-white">Running</span>
  </div>
</template>

<script setup lang="ts">
import type { IWorker } from "@/types"

defineProps<{
  worker: IWorker
}>()
</script>

<style scoped></style>
