<script setup>
import { ref } from 'vue'
const props = defineProps(['options', 'modelValue', 'labelTitle'])

defineEmits(['update:modelValue'])

const current = ref(props.options[0])
</script>

<template>
	<div class="switch">
		<input
			type="checkbox"
			id="switch"
			@change="
				$emit(
					'update:modelValue',
					$event.target.checked ? options[1] : options[0]
				)
			" />
		<label for="switch">
			<slot name="label-title">
				<div class="label-title">{{ labelTitle }}</div>
			</slot>
			<span class="toggle"></span>

			<div class="options">
				<span>{{ options[0] }}</span>
				<span>{{ options[1] }}</span>
			</div>
		</label>
	</div>
</template>

<style scoped>
.switch {
	--width: 200px;
	--height: 100px;
	--innerSize: calc(var(--height) * 0.9);
	--offset: calc((var(--height) - var(--innerSize)) / 2);
	display: block;
	position: relative;
}
input[type='checkbox']#switch {
	height: 0;
	padding: 0;
	width: 0;
	visibility: hidden;
	margin: 0;
	display: block;
}

label {
	width: var(--width);
}

label .options {
	display: grid;
	justify-content: space-between;
	grid-template-columns: 48% 48%;
	grid-template-rows: auto;
}

label .options span {
	grid-row: 1;
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 500;
	color: var(--color-orange-3);
}

label .options span {
	font-size: 2rem;
	line-height: 1;
	font-weight: 500;
	color: var(--color-orange-3);
	transition: all 0.3s;
}

input + label .options span:nth-child(1) {
	filter: none;
	font-size: 2rem;
	transform: none;
}

input + label .options span:nth-child(2) {
	filter: grayscale(0.8) brightness(1.5);
	transform: scale(0.8);
}

input:checked + label .options span:nth-child(1) {
	filter: grayscale(0.8) brightness(1.5);
	transform: scale(0.8);
}

input:checked + label .options span:nth-child(2) {
	filter: none;
	font-size: 2rem;
	transform: none;
}

label .options span:nth-child(2) {
	text-align: right;
}

label .toggle:after {
	content: '';
	position: absolute;
	height: var(--innerSize);
	width: var(--innerSize);
	left: var(--offset);
	top: var(--offset);
	border-radius: var(--innerSize);
	transition: 0.3s;
	background-color: #fff;
	transform-origin: left;
}

label .toggle {
	cursor: pointer;
	width: var(--width);
	height: var(--height);
	background-color: var(--color-yellow-2);
	display: block;
	border-radius: var(--height);
	position: relative;
}

input:checked + label .toggle:after {
	left: calc(100% - var(--offset));
	transform: translate(-100%, 0);
	transform-origin: right;
}

label:active .toggle:after {
	/* transform: scaleX(1.1); */
	width: calc((var(--innerSize) * 1.2));
}
</style>
