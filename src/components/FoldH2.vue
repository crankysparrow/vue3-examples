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
		<button @click="toggle" :aria-expanded="open">
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
button {
	background: transparent;
	padding: 0;
	color: inherit;
	margin-top: 3rem;
	border-radius: 0;
	width: 100%;
	align-items: stretch;
	max-width: none;
	display: block;
	text-align: left;
	/* color-teal-5 */
	/* background-color: rgba(0, 68, 60, 0.3); */
	border-bottom: 1px solid var(--color-gray-3);
	background-color: rgba(25, 25, 25, 1);
	padding: 0.7rem 1rem 0.4rem;
}

button:hover {
	/* background-color: var(--color-azure-4); */
	background-color: rgba(0, 68, 60, 0.9);
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

button[aria-expanded='true'] h2:before {
	content: '-';
}

.content {
	padding: 1rem;
}
</style>
