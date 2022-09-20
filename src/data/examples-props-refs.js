let shapeOptions = `<script>
import { findPoints } from './findPoints.js'
import ToggleSwitch from '~/components/ToggleSwitch.vue'

export default {
  components: {
    ToggleSwitch,
  },
  data() {
    return {
      count: 6,
      options: ['points', 'sides'],
      current: 'points',
    }
  },
  computed: {
    points() {
      return findPoints(this.current, this.count)
    }
  }
}
</script>

<template>
  <div class="page">
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
  </div>
</template>`

let shapeComposition = `<script setup>
import ToggleSwitch from '~/components/ToggleSwitch.vue'
import { computed, ref } from 'vue'
import { findPoints } from './findPoints.js'

const count = ref(6)
const options = ref(['points', 'sides'])
const current = ref('points')
const points = computed(() => {
  return findPoints(current.value, count.value)
})
</script>

<template>
  <div class="page">
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
  </div>
</template>`

let shapeCompositionReactive = `<script setup>
import ToggleSwitch from '~/components/ToggleSwitch.vue'
import { computed, reactive } from 'vue'
import { findPoints } from './findPoints.js'

const state = reactive({
  count: 6,
  options: ['points', 'sides'],
  current: 'points',
})

const points = computed(() => {
  return findPoints(state.current, state.count)
})
</script>

<template>
  <div class="page">
    <div class="options-choices">
      <div class="buttons-wrap">
        <div class="label-title">{{ state.current }}</div>
        <div class="count-note">{{ state.count }}</div>
        <button @click="() => state.count++"><span>+</span></button>
        <button @click="() => state.count--"><span>-</span></button>
      </div>
      <ToggleSwitch :options="state.options" v-model="state.current">
        <template #label-title>
          <div class="label-title">mode</div>
        </template>
      </ToggleSwitch>
    </div>
    <svg viewBox="0 0 300 300">
      <polygon :points="points" />
    </svg>
  </div>
</template>`

let optionsComputedPoints = `<script>
export default {
  ...
  computed: {
    points() {
      let angleStep = (Math.PI * 2) / this.sides
      // do some math...
      // return a string used for points of the polygon
    }
  }
}
</script>

<template>
  <div>
    <svg viewBox="0 0 300 300">
      <polygon :points="points" />
    </svg>
  </div>
</template>
`

let optionsData = `<script>
export default {
  data() {
    return {
      count: 6,
    }
  },
  ...
}
</script>

<template>
  <div>
    <button @click="() => count++">+</button>
    <button @click="() => count--">-</button>
  </div>
</template>`

let compositionRef = `<script setup>
import { ref } from 'vue'

const count = ref(6)
</script>

<template>
  <div>
    <div>{{ count }}</div>
    <button @click="() => count++"><span>+</span></button>
    <button @click="() => count--"><span>-</span></button>
  </div>
</template>`

export default {
  optionsData,
  optionsComputedPoints,
  compositionRef,
  shapeOptions,
  shapeComposition,
  shapeCompositionReactive,
}
