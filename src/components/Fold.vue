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
		<button @click="toggle" :aria-expanded="open" class="fold-btn">
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
.fold {
	--hover: #8599fb;
}
.fold button.fold-btn {
	margin-top: 1rem;
	padding: 0.2rem 1rem;
	background-color: #d5f4ff;
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

button.fold-btn[aria-expanded='true'] h3:before {
	content: '-';
}

.fold .content {
	padding: 1rem;
	/* background-color: #e3f7ff; */
	position: relative;
	z-index: 1;
	border-left-color: #d5f4ff;
}

.fold .content:before {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	content: '';
	background-color: var(--color-sky-1);
	z-index: -1;
	opacity: 0.5;
}
</style>
