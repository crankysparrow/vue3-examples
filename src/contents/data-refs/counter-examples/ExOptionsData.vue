<script>
export default {
  data() {
    return {
      count: 6,
    }
  },
}
</script>

<template>
  <div class="buttons-wrap">
    <div class="label-title">count</div>

    <div class="count-note">
      {{ count }}
    </div>
    <button @click="() => count++"><span>+</span></button>
    <button @click="() => count--"><span>-</span></button>
    <div class="component-def">
      This component: <code>ExOptionsData.vue</code>
    </div>
  </div>
</template>

<style scoped>
.component-def {
  grid-column: 1 / 3;
}
</style>
