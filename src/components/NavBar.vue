<script setup></script>

<template>
  <nav>
    <ul class="links">
      <li>
        <ul>
          <li>
            <router-link :to="{ name: 'home' }">home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'resources' }">resources</router-link>
          </li>
        </ul>
      </li>

      <li>
        <span class="item-title">dynamic routes</span>
        <ul>
          <li>
            <router-link :to="{ name: 'dynamic-routes' }"
              >notes & examples</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'people' }">characters</router-link>
          </li>
        </ul>
      </li>

      <li>
        <span class="item-title">data & refs</span>
        <ul>
          <li>
            <router-link :to="{ name: 'data-refs' }">
              notes & examples
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'shape' }"> shape </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.links {
  display: flex;
  justify-content: flex-start;
  margin: 0;
  margin-bottom: 40px;
  list-style: none;
}

.links ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.links .item-title {
  font-weight: 600;
}
ul.links > li {
  margin: 0 1.5rem;
}
</style>
