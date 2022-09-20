<script setup>
import { ref } from 'vue'

const count = ref(6)
</script>

<template>
  <div>
    <div class="buttons-wrap">
      <div class="label-title">count:</div>
      <div class="count-note">
        {{ count }}
      </div>
      <button @click="() => count++"><span>+</span></button>
      <button @click="() => count--"><span>-</span></button>
      <div class="component-def">This component: <code>ExApiRef.vue</code></div>
    </div>
  </div>
</template>
