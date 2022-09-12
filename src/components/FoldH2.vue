<script setup>
import { ref } from 'vue'

const props = defineProps({
	defaultOpen: { type: Boolean, default: true },
})

const open = ref(props.defaultOpen)

const toggle = () => {
	open.value = !open.value
}
</script>

<template>
	<div class="fold">
		<button class="fold-btn" @click="toggle" :aria-expanded="open">
			<h2>
				<slot name="title">Example</slot>
			</h2>
		</button>
		<div class="content" v-if="open">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<style scoped>
button.fold-btn {
	margin-top: 3rem;
}

h2 {
	margin: 0;
}

h2:before {
	content: '+';
	display: inline-block;
	position: relative;
	top: -0.1rem;
	font-weight: 400;
	margin-right: 1rem;
}

button[aria-expanded='true'].fold-btn h2:before {
	content: '-';
}
</style>
