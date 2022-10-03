import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: 'Michelle',
    avatar: '🐶',
  })

  const updateName = (newName) => (user.value.name = newName)
  const updateAvatar = (newAvatar) => (user.value.avatar = newAvatar)

  return { user, updateAvatar, updateName }
})
