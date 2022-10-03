import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('userSetup', () => {
  const name = ref('Michelle')
  const avatar = ref('🐶')

  const updateName = (newName) => (name.value = newName)
  const updateAvatar = (newAvatar) => (avatar.value = newAvatar)

  return { name, avatar, updateAvatar, updateName }
})
