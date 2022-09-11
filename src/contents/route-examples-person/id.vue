<script setup>
import { people } from '../../data/tng.json'
import { useRoute } from 'vue-router'
import { watch, ref, onMounted } from 'vue'

const route = useRoute()

const props = defineProps(['id'])

const character = ref()

onMounted(() => {
	character.value = people.find((person) => person.id == props.id)
})

watch(
	() => route.params,
	(newVal, oldVal) => {
		character.value = people.find((person) => person.id == newVal.id)
	}
)
</script>

<template>
	<div class="page-person">
		<h1 v-if="character">{{ character.name }}</h1>
		<div class="char-content" v-if="character">
			<img v-if="character.photo" :src="character.photo" />
			<table>
				<tbody>
					<tr>
						<th scope="row">name</th>
						<td>{{ character.name }}</td>
					</tr>
					<tr>
						<th scope="row">affiliation</th>
						<td>{{ character.affiliation }}</td>
					</tr>
					<tr>
						<th scope="row">played by</th>
						<td>{{ character.playedBy }}</td>
					</tr>
					<tr>
						<th scope="row">species</th>
						<td>{{ character.species }}</td>
					</tr>
					<tr>
						<th scope="row">position</th>
						<td>{{ character.position }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped>
img {
	max-width: 250px;
}

@media (min-width: 600px) {
	.char-content {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
	}
	table {
		margin-right: 1.5rem;
		margin-left: 1rem;
		flex-grow: 1;
	}
	img {
		order: 2;
		max-width: 200px;
	}
}

@media (min-width: 850px) {
	.char-content {
		justify-content: flex-end;
	}
	table th {
		width: 7rem;
	}
}

@media (min-width: 1024px) {
	table {
		margin-left: 2rem;
		margin-right: 2rem;
	}
}
</style>
