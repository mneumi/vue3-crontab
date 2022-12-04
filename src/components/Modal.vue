<template>
  <input type="checkbox" class="modal-toggle" :checked="opened" />
  <div class="modal">
    <div class="modal-box" :class="{ 'max-w-7xl': large }">
      <h3 class="font-bold text-lg">{{ title }}</h3>
      <p class="py-4">
        <slot />
      </p>
      <div class="modal-action">
        <div class="btn" @click="onCancel" v-if="!hideCancel">
          {{ cancelText ?? "取消" }}
        </div>
        <div class="btn btn-accent" @click="onConfirm">
          {{ confirmText ?? "关闭" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  opened: boolean
  hideCancel: boolean
  confirmText?: string
  cancelText?: string
  large?: boolean
}>()

const emits = defineEmits(["confirm", "cancel"])

const onConfirm = () => {
  emits("confirm")
}
const onCancel = () => {
  emits("cancel")
}
</script>

<style scoped></style>
