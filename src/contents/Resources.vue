<script setup>
const resources = [
	{ name: 'vue docs', url: 'https://vuejs.org/guide/introduction.html' },
	{ name: 'vue router docs', url: 'https://router.vuejs.org/' },
	{
		name: 'migrating from vue2 to vue3',
		url: 'https://v3-migration.vuejs.org/',
	},
	{
		name: 'vue router demo on stackblitz',
		url: 'https://stackblitz.com/edit/vue3-vue-router-demo?file=src%2Frouter.js',
	},
]
</script>

<template>
	<div class="resources-page page">
		<h1>resources</h1>

		<ul>
			<li v-for="(item, i) in resources" :key="i">
				<a :href="item.url" target="_blank" rel="noopener">{{
					item.name
				}}</a>
			</li>
		</ul>
	</div>
</template>

<style scoped>
.resources-page {
	background-color: var(--color-azure-6);
}
</style>
