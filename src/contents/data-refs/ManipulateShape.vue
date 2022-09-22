<script setup></script>

<template>
  <div class="page">
    <ul class="shape-nav">
      <li>
        <router-link :to="{ name: 'shape-options' }">Options API</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'shape-reactive' }">
          Composition API & reactive
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'shape-ref' }"
          >Composition API & ref</router-link
        >
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<style scoped>
ul.shape-nav {
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 3rem;
}

ul.shape-nav li {
  padding: 0 2rem;
}

ul.shape-nav a.router-link-active {
  background-color: var(--color-yellow-2);
  color: var(--color-purple-5);
}
</style>
