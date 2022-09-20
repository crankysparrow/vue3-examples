<script>
import ToggleSwitch from '~/components/ToggleSwitch.vue'
import examples from '~/data/examples-props-refs.js'
import CodeEditor from '~/components/CodeEditor.vue'
import Fold from '~/components/Fold.vue'
import { findPoints } from './findPoints.js'

export default {
  components: {
    ToggleSwitch,
    CodeEditor,
    Fold,
  },
  data() {
    return {
      count: 6,
      options: ['points', 'sides'],
      current: 'points',
      example: examples.shapeOptions,
    }
  },
  computed: {
    points() {
      return findPoints(this.current, this.count)
    },
  },

  methods: {},
}
</script>

<template>
  <div class="page">
    <h1>Shape with Options API</h1>

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
        <CodeEditor :content="example" />
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
