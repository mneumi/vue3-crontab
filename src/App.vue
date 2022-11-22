<template>
  <Hint />
  <div class="w-screen h-screen bg-slate-200">
    <Header />
    <WorkerPlane />
    <div class="divider"></div>
    <JobPlane />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue"
import WorkerPlane from "@/components/WorkerPlane.vue"
import JobPlane from "@/components/JobPlane.vue"
import Hint from "@/components/Hint.vue"
</script>

<style scoped></style>
