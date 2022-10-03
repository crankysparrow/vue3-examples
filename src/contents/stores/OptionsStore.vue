<script setup>
import { useUserStore } from '~/store/userStoreOptions'
import UserStoreTemplate from './UserStoreTemplate.vue'
import { storeToRefs } from 'pinia'

const store = useUserStore()
const { name, avatar } = storeToRefs(store)
const { updateName, updateAvatar } = store
</script>

<template>
  <UserStoreTemplate
    :name="name"
    :avatar="avatar"
    @updateName="(newName) => updateName(newName)"
    @updateAvatar="(newAv) => updateAvatar(newAv)">
    <slot></slot>
  </UserStoreTemplate>
</template>
