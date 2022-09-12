<script setup>
import CodeEditor from '../components/CodeEditor.vue'
import Fold from '../components/Fold.vue'
import FoldH2 from '../components/FoldH2.vue'
import List from '../components/List.vue'
import RouterPushCharacters from '../components/RouterPushCharacters.vue'
import examples from '../data/examples'
</script>

<template>
	<div class="page page-dynamic">
		<h1>Dynamic Routing</h1>

		How to create dynamic routes & a million different ways we can use them.

		<FoldH2 :defaultOpen="true">
			<template #title>Named Route with Props</template>
			<template #content>
				<CodeEditor :content="examples.named" />

				<Fold>
					<template #title> Example </template>
					<template #content>
						<List v-slot="person">
							<router-link
								:to="{
									name: 'person',
									params: { id: person.id },
								}">
								{{ person.name }}
							</router-link>
						</List>
					</template>
				</Fold>
			</template>
		</FoldH2>

		<FoldH2 :defaultOpen="true">
			<template #title>Unnamed Route with Props</template>
			<template #content>
				<p>
					access the ID in the Person component in the same way as
					named route above.
				</p>

				<CodeEditor :content="examples.unnamedProps" />

				<Fold>
					<template #title> Example </template>
					<template #content>
						<List v-slot="person">
							<router-link
								:to="`/person-without-name/${person.id}`">
								{{ person.name }}
							</router-link>
						</List>
					</template>
				</Fold>

				<h3>This doesn't work:</h3>
				(object with path + params, if no named route)

				<CodeEditor :content="examples.unnamedLinkWithPath" />

				<h3>This is okay:</h3>
				(just path variable in <code>:to</code>)

				<CodeEditor :content="examples.unnamedLinkPathNoParams" />

				<Fold>
					<template #content>
						<List v-slot="person">
							<router-link
								:to="{
									path: `/person-without-name/${person.id}`,
								}">
								{{ person.name }}
							</router-link>
						</List>
					</template>
				</Fold>
			</template>
		</FoldH2>

		<FoldH2>
			<template #title>Unnamed Route without Props</template>
			<template #content>
				<CodeEditor :content="examples.unnamedNoProps" />

				<Fold>
					<template #content>
						<List v-slot="person">
							<router-link :to="`/person-noprops/${person.id}`">
								{{ person.name }}
							</router-link>
						</List>
					</template>
				</Fold>
			</template>
		</FoldH2>

		<FoldH2>
			<template #title>Named Route + No Props</template>
			<template #content>
				<p>
					you can still access id in the Person component as
					<code>$route.params.id</code>
				</p>

				<CodeEditor :content="examples.namedNoProps" />

				<Fold>
					<template #content>
						<List v-slot="person">
							<router-link
								:to="{
									name: 'personNameNoProps',
									params: { id: person.id },
								}"
								>{{ person.name }}</router-link
							>
						</List>
					</template>
				</Fold>
			</template>
		</FoldH2>

		<FoldH2>
			<template #title>Component in JS</template>
			<template #content>
				(need to
				<a
					href="https://vuejs.org/guide/scaling-up/tooling.html#note-on-in-browser-template-compilation"
					>compile in the browser</a
				>)

				<CodeEditor :content="examples.componentObject" />

				<Fold>
					<template #content>
						<List v-slot="person">
							<router-link :to="`person-object/${person.id}`">{{
								person.name
							}}</router-link>
						</List>
					</template>
				</Fold>
			</template>
		</FoldH2>

		<FoldH2>
			<template #title>
				Programmatic Routing with <code>router.push</code>
			</template>
			<template #content> <RouterPushCharacters /></template>
		</FoldH2>
	</div>
</template>

<style scoped>
h2 {
	border-bottom: 1px solid var(--color-gray-4);
	margin-left: -1rem;
	padding-left: 1rem;
	margin-right: -1rem;
	padding-bottom: 0.3rem;
}
</style>
