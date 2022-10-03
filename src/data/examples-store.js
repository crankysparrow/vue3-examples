let setupObject = {
  code: `// store
export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: 'Michelle',
    avatar: '🐶',
  })

  const updateName = (newName) => user.value.name = newName
  const updateAvatar = (newAvatar) => user.value.avatar = newAvatar

  return { user, updateAvatar, updateName }
})

// component script
import { useUserStore } from '~/store/userStoreSetupObject'
const { user, updateAvatar, updateName } = useUserStore()
const newName = ref('')

// template
<input type="text" v-model="newName" />
<button @click="updateName(newName)">Update User Name</button>
`,
  lines: '16',
}

let withoutStoreToRefs = {
  code: `// userStoreSetup.js
export const useUserStore = defineStore('userSetup', () => {
  const name = ref('Michelle')
  const avatar = ref('🐶')

  const updateName = (newName) => name.value = newName
  const updateAvatar = (newAvatar) => avatar.value = newAvatar

  return { name, avatar, updateAvatar, updateName }
})

// component
const store = useUserStore()
const { name, avatar, updateAvatar, updateName } = store
`,
  lines: '13',
}

let withStoreToRefs = {
  code: `// userStoreSetup.js
export const useUserStore = defineStore('userSetup', () => {
  const name = ref('Michelle')
  const avatar = ref('🐶')

  const updateName = (newName) => name.value = newName
  const updateAvatar = (newAvatar) => avatar.value = newAvatar

  return { name, avatar, updateAvatar, updateName }
})

// component
import { useUserStore } from '~/store/userStoreSetup'
import { storeToRefs } from 'pinia'

const store = useUserStore()
const { name, avatar } = storeToRefs(store)
const { updateAvatar, updateName } = store
`,
  lines: '17',
}

export default {
  setupObject,
  withoutStoreToRefs,
  withStoreToRefs,
}
