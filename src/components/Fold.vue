<script setup>
import { ref } from 'vue'

const props = defineProps({
	defaultOpen: { type: Boolean, default: false },
})

const open = ref(props.defaultOpen)

const toggle = () => {
	open.value = !open.value
}
</script>

<template>
	<div class="fold">
		<button @click="toggle" :aria-expanded="open">
			<h3>
				<slot name="title">Example</slot>
			</h3>
		</button>
		<div class="content" v-if="open">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<style scoped>
button {
	background: transparent;
	padding: 0;
	color: inherit;
	margin-top: 1rem;
	border-radius: 0;
	width: 100%;
	align-items: stretch;
	max-width: none;
	display: block;
	text-align: left;
	/* color-teal-5 */
	background-color: rgba(0, 68, 60, 0.3);
	padding: 0.2rem 1rem;
}

button:hover {
	/* background-color: var(--color-azure-4); */
	background-color: rgba(0, 68, 60, 0.9);
}

h3 {
	margin: 0;
}

h3:before {
	content: '+';
	display: inline-block;
	position: relative;
	top: -0.1rem;
	font-weight: 400;
	margin-right: 1rem;
}

button[aria-expanded='true'] h3:before {
	content: '-';
}

.content {
	padding: 1rem;
}
</style>
