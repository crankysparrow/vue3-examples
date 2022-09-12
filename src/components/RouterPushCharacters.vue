<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import examples from '../data/examples'
import { people } from '../data/tng.json'
import CodeEditor from './CodeEditor.vue'

const router = useRouter()

const charId = ref()
const error = ref()

const doRouting = () => {
	if (!charId.value) {
		error.value = 'oops! choose a character first'
	} else {
		// router.push(`person/${charId.value}`)
		router.push({ name: 'person', params: { id: charId.value } })
	}
}
</script>

<template>
	<div class="router-push-example">
		<CodeEditor :content="examples.routerPush" />

		<div class="input-wrap">
			<label for="characters">Select a character:</label>
			<select name="characters" id="characters" v-model="charId">
				<option value selected disabled>Select a character</option>
				<option v-for="(person, i) in people" :value="person.id">
					{{ person.name }}
				</option>
			</select>
		</div>

		<button @click="doRouting">go to this character page</button>
		<div v-if="error" class="error">{{ error }}</div>
	</div>
</template>

<style scoped>
.error {
	color: var(--color-orange-3);
}

.push-form-wrap {
	margin-top: 2rem;
}
</style>
