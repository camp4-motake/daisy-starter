export const useMenuStore = defineStore('menu', () => {
  const isOpen = ref(false)

  const toggle = () => {
    isOpen.value = !isOpen.value
  }
  const open = () => {
    isOpen.value = true
  }
  const close = () => {
    isOpen.value = false
  }

  return { isOpen, toggle, close, open }
})
