<template>
  <div
    class="w-screen h-20 bg-slate-100 flex items-center justify-between pl-8 pr-8"
  >
    <div class="text-accent font-bold text-3xl hover:cursor-pointer">
      <div>etcd-crontab</div>
    </div>

    <div>
      <div class="btn btn-accent" @click="handleBtnClick">Github</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleBtnClick = () => {
  window.open("https://github.com/mneumi/etcd-crontab")
}
</script>

<style scoped></style>
