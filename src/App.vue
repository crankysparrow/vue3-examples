<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
	<div class="wrap">
		<div class="links">
			<router-link :to="{ name: 'home' }">Home</router-link>
			<router-link :to="{ name: 'resources' }">Resources</router-link>
			<router-link :to="{ name: 'people' }">People</router-link>
			<router-link :to="{ name: 'dynamic-routes' }"
				>Dynamic Routes</router-link
			>
		</div>
		<router-view></router-view>
	</div>
</template>

<style scoped>
.links {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 40px;
}

.links a {
	margin: 0 1.5rem;
	font-size: 1.2rem;
	line-height: 1;
}
</style>
