<script setup>
import { people } from '../data/tng.json'
import examples from '../data/examples'
import { useRouter } from 'vue-router'
import List from '../components/List.vue'
import RouterPushCharacters from '../components/RouterPushCharacters.vue'

const router = useRouter()

const doRouting = () => {
	router.push('person/1')
}
</script>

<template>
	<div class="page page-people">
		<h1>Dynamic Routing</h1>

		How to create dynamic routes & a million different ways we can use them.

		<h2>Named Route with Props</h2>

		<highlightjs language="html" :code="examples.named" />

		<List v-slot="person">
			<router-link :to="{ name: 'person', params: { id: person.id } }">
				{{ person.name }}
			</router-link>
		</List>

		<h2>Unnamed Route with Props</h2>
		<p>
			access the ID in the Person component in the same way as named route
			above.
		</p>
		<highlightjs autodetect :code="examples.unnamedProps" />

		<List v-slot="person">
			<router-link :to="`/person-without-name/${person.id}`">
				{{ person.name }}
			</router-link>
		</List>

		<h3>This doesn't work:</h3>
		(object with path + params, if no named route)

		<highlightjs autodetect :code="examples.unnamedLinkWithPath" />

		<h3>This is okay:</h3>
		(just path variable in <code>:to</code>)

		<highlightjs autodetect :code="examples.unnamedLinkPathNoParams" />

		<List v-slot="person">
			<router-link
				:to="{
					path: `/person-without-name/${person.id}`,
				}"
			>
				{{ person.name }}
			</router-link>
		</List>

		<h2>Unnamed Route without Props</h2>

		<highlightjs language="javascript" :code="examples.unnamedNoProps" />
		<List v-slot="person">
			<router-link :to="`/person-noprops/${person.id}`">
				{{ person.name }}
			</router-link>
		</List>

		<h2>Named Route + No Props</h2>
		<p>
			you can still access id in the Person component as
			<code>$route.params.id</code>
		</p>

		<highlightjs :code="examples.namedNoProps" />
		<List v-slot="person">
			<router-link
				:to="{
					name: 'personNameNoProps',
					params: { id: person.id },
				}"
				>{{ person.name }}</router-link
			>
		</List>

		<h2>Component in JS:</h2>
		(need to
		<a
			href="https://vuejs.org/guide/scaling-up/tooling.html#note-on-in-browser-template-compilation"
			>compile in the browser</a
		>)

		<highlightjs :code="examples.componentObject" />

		<List v-slot="person">
			<router-link :to="`person-object/${person.id}`">{{
				person.name
			}}</router-link>
		</List>

		<h2>Programmatic Routing with <code>router.push</code></h2>

		<RouterPushCharacters />
	</div>
</template>

<style scoped>
.page-people {
	background-color: var(--color-gray-6);
}

h2 {
	border-bottom: 1px solid var(--color-gray-4);
	margin-left: -1rem;
	padding-left: 1rem;
	margin-right: -1rem;
	padding-bottom: 0.3rem;
}
</style>
