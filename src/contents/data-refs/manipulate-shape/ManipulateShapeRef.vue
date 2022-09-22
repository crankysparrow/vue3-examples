<script setup>
import ToggleSwitch from '~/components/ToggleSwitch.vue'
import { computed, ref } from 'vue'
import examples from '~/data/examples-props-refs.js'
import Fold from '~/components/Fold.vue'
import CodeEditor from '~/components/CodeEditor.vue'
import { findPoints } from '~/contents/data-refs/findPoints.js'

const count = ref(6)
const options = ref(['points', 'sides'])
const current = ref('points')

const points = computed(() => {
  return findPoints(current.value, count.value)
})
</script>

<template>
  <div class="shape-inner">
    <h1>Shape with Composition API and <code>ref()</code></h1>

    <div class="options-choices">
      <div class="buttons-wrap">
        <div class="label-title">{{ current }}</div>
        <div class="count-note">{{ count }}</div>
        <button @click="() => count++"><span>+</span></button>
        <button @click="() => count--"><span>-</span></button>
      </div>
      <ToggleSwitch :options="options" v-model="current">
        <template #label-title>
          <div class="label-title">mode</div>
        </template>
      </ToggleSwitch>
    </div>
    <svg viewBox="0 0 300 300">
      <polygon :points="points" />
    </svg>

    <Fold>
      <template #title>Show Code</template>
      <template #content>
        <CodeEditor :content="examples.shapeComposition" />
      </template>
    </Fold>
  </div>
</template>

<style scoped>
svg {
  max-width: 500px;
  max-height: 500px;
  margin: 0 auto;
  display: block;
}
svg polygon {
  fill: var(--color-raspberry-3);
}

h1 {
  margin-top: 0;
}

.options-choices {
  display: grid;
  justify-content: center;
  position: relative;
  grid-template-columns: auto auto;
  column-gap: 3rem;
  margin-bottom: 50px;
}
</style>
