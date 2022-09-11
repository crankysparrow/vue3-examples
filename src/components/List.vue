<script setup>
import { people } from '../data/tng.json'
</script>

<template>
	<ul>
		<li v-for="(person, i) in people" :key="i">
			<slot v-bind="person"></slot>
		</li>
	</ul>
</template>
