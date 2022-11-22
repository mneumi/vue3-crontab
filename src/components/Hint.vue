<template>
  <Modal
    title="温馨提示"
    :opened="opened"
    :hide-cancel="true"
    @confirm="onConfirm"
  >
    <p class="py-4" v-for="(tip, index) in tips" :key="index">
      {{ tip }}
    </p>
  </Modal>
</template>

<script setup lang="ts">
import Modal from "@/components/Modal.vue"

import { ref } from "vue"

const tips: string[] = [
  "1. 本页面仅适配桌面端，请使用电脑浏览器进行预览",
  "2. 本页面仅供预览，为了保证服务器的正常运行，对于页面上的操作，虽然都会发出请求到服务器，但是写入请求会被服务器被拦截，所以操作看起来是没有效果的"
]

const opened = ref(true)
const onConfirm = () => {
  opened.value = false
}
</script>

<style scoped></style>
