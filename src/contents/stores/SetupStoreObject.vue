<script setup>
import { useUserStore } from '~/store/userStoreSetupObject'
import UserStoreTemplate from './UserStoreTemplate.vue'

const { user, updateAvatar, updateName } = useUserStore()
</script>

<template>
  <UserStoreTemplate
    :name="user.name"
    :avatar="user.avatar"
    @updateName="(newName) => updateName(newName)"
    @updateAvatar="(newAv) => updateAvatar(newAv)">
    <slot></slot>
  </UserStoreTemplate>
</template>
