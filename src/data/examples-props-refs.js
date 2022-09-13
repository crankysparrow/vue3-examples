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
}
