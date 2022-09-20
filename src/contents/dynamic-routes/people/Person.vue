<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { people } from '~/data/tng.json'

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
            <th scope="row">full name</th>
            <td>{{ character.fullName }}</td>
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
      <div class="component-def">This component: <code>Person.vue</code></div>
    </div>
  </div>
</template>

<style scoped>
img {
  max-width: 250px;
}
.char-content {
  padding-right: 1rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.component-def {
  display: inline-block;
  align-self: center;
}

table {
  margin-top: 1rem;
}

@media (min-width: 850px) {
  .char-content {
    display: grid;
    grid-column-gap: 1rem;
    grid-template-columns: 1fr 200px;
  }
  table {
    grid-row: 1;
    grid-column: 1;
    margin: 0;
  }
  img {
    grid-row: 1;
    grid-column: 2;
    max-width: 200px;
  }
  .char-content .component-def {
    grid-row: 2;
    grid-column: 1 / 3;
    justify-self: center;
    margin-top: 3rem;
  }
}

@media (min-width: 1024px) {
  .char-content {
    grid-column-gap: 2rem;
    padding-left: 2rem;
  }
  table th {
    width: 7rem;
  }
}
</style>
