import { defineStore } from 'pinia'

export const useUserStore = defineStore('userOptions', {
  state: () => ({
    name: 'Michelle',
    avatar: '🐶',
  }),
  actions: {
    updateName(newName) {
      this.name = newName
    },
    updateAvatar(newAvatar) {
      this.avatar = newAvatar
    },
  },
})
