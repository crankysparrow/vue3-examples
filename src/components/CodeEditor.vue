<script setup>
import Prism from 'vue-prism-component'
import { computed } from 'vue'

const props = defineProps(['content'])

const code = computed(() => {
  if (typeof props.content === 'object') {
    return props.content.code
  } else {
    return props.content
  }
})

const lines = computed(() => {
  if (typeof props.content === 'object') {
    return props.content.lines ?? false
  } else {
    return false
  }
})
</script>

<template>
  <div>
    <Prism v-if="lines" language="javascript" :data-line="lines">{{
      code
    }}</Prism>
    <Prism v-else language="javascript">{{ code }}</Prism>
  </div>
</template>
