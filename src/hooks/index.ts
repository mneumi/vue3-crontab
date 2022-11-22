import { ref } from "vue"

const useModal = () => {
  const opened = ref<boolean>(false)
  const onConfirm = () => {
    opened.value = false
  }
  const onCancel = () => {
    opened.value = false
  }
  const onClick = () => {
    opened.value = true
  }

  return [opened, onClick, onConfirm, onCancel] as const
}

export { useModal }
