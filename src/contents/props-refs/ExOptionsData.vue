<script>
export default {
	data() {
		return {
			count: 6,
		}
	},
}
</script>

<template>
	<div class="buttons-wrap">
		<div class="label-title">count</div>

		<div class="count-note">
			{{ count }}
		</div>
		<button @click="() => count++"><span>+</span></button>
		<button @click="() => count--"><span>-</span></button>
	</div>
</template>

<style scoped></style>
