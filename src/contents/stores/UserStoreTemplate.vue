<script setup>
import { ref, defineEmits, defineProps } from 'vue'
import FoldH2 from '~/components/FoldH2.vue'

const props = defineProps({
  title: String,
  name: String,
  avatar: String,
})

const emit = defineEmits(['updateName', 'updateAvatar'])

const newName = ref('')
const avatars = ['🐶', '🐰', '🦊', '🐻', '🐷']
</script>

<template>
  <FoldH2>
    <template #title>{{ title }}</template>
    <template #content>
      <div class="store-template">
        <div class="user-prop"><strong>Name: </strong>{{ name }}</div>

        <div class="user-prop avatar">
          <strong>Avatar: </strong><span class="emoji">{{ avatar }}</span>
        </div>

        <div class="edit name-edit">
          <label for="newName">Edit User Name:</label>
          <input type="text" id="newName" v-model="newName" />
          <button @click="emit('updateName', newName)">Update User Name</button>
        </div>

        <div class="edit avatar-edit">
          <h3>Update Avatar:</h3>
          <div class="avatars-list">
            <button
              v-for="(av, i) in avatars"
              :key="i"
              @click="emit('updateAvatar', av)">
              {{ av }}
            </button>
          </div>
        </div>
        <div class="slot-info">
          <slot></slot>
        </div>
      </div>
    </template>
  </FoldH2>
</template>

<style scoped>
.user-prop {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.input-wrap input[type='text'] {
  margin: 0;
}
.user-prop.avatar .emoji {
  font-size: 3rem;
}

@media (min-width: 768px) {
  .store-template {
    display: grid;
    grid-template-columns: 55% 40%;
    justify-content: space-between;
  }
}
.slot-info {
  grid-column: 1 / 3;
  margin-top: 1rem;
}

.edit.name-edit {
  display: grid;
  grid-template-columns: 1fr max-content;
}
.edit.name-edit button {
  grid-column: 2;
  grid-row: 2;
  align-self: start;
  padding: 1.05rem 0.5rem;
  font-size: 0.9rem;
  margin-left: 0.5rem;
}
.edit.name-edit input {
  grid-column: 1;
  grid-row: 2;
  margin: 0;
}
.edit h3 {
  margin-top: 0;
}
.avatars-list button {
  margin: 0;
  margin-right: 0.5rem;
  padding: 0.3rem;
  font-size: 1.8rem;
  background-color: #fff;
  border: 2px solid var(--color-rose-3);
}
.avatars-list button:hover,
.avatars-list button:focus {
  background-color: var(--color-rose-2);
  border-color: var(--color-orange-3);
}
</style>
