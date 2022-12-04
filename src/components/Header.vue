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
  window.open(
    "https://blog.mneumi.cn/docs/%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE/etcd-crontab/%E4%BB%8B%E7%BB%8D"
  )
}
</script>

<style scoped></style>
