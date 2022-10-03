<script setup>
import { useUserStore } from '~/store/userStoreSetup'
import UserStoreTemplate from './UserStoreTemplate.vue'

const store = useUserStore()

const { name, avatar } = store
const { updateAvatar, updateName } = store
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
