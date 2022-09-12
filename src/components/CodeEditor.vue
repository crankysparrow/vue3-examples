<script setup>
import Prism from 'vue-prism-component'

defineProps({
	content: String,
})
</script>

<template>
	<div>
		<Prism language="javascript"> {{ content }}</Prism>
	</div>
</template>
