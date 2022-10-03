import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Michelle',
    avatar: '🐶',
    favoriteColor: '#f0f',
  }),
  actions: {
    updateColor(color) {
      if (color) {
        this.favoriteColor = color
      }
    },
    updateName(newName) {
      if (!newName || newName === '') return
      this.name = newName
    },
    updateAvatar(newAvatar) {
      if (newAvatar) this.avatar = newAvatar
    },
  },
})
