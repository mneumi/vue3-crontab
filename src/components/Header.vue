<template>
  <div
    class="w-screen h-20 bg-slate-100 flex items-center justify-between pl-8 pr-8"
  >
    <div class="text-accent font-bold text-3xl hover:cursor-pointer">
      <div>etcd-crontab</div>
    </div>

    <div>
      <div class="btn btn-accent mr-4" @click="handleDescClick">项目说明</div>
      <div class="btn btn-accent" @click="handleGithubClick">Github</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleGithubClick = () => {
  window.open("https://github.com/mneumi/etcd-crontab")
}
const handleDescClick = () => {
  window.open("https://blog.mneumi.cn/docs/个人项目/etcd-crontab/介绍")
}
</script>

<style scoped></style>
