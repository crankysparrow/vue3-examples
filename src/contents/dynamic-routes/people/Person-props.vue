<script setup>
const props = defineProps(['id'])
</script>

<template>
  <div class="page page-person">
    <h1>Person with props</h1>
    this component has prop id: {{ id }}
  </div>
</template>
