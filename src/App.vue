<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="wrap">
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
            <router-link :to="{ name: 'people' }">Characters</router-link>
          </li>
        </ul>
      </li>

      <li>
        <span class="item-title">data & refs</span>
        <ul>
          <li>
            <router-link :to="{ name: 'data-refs' }"
              >notes & examples</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'shape-composition' }">
              shape: composition API with ref()
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'shape-composition-reactive' }">
              shape: composition API with reactive()
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'shape-options' }">
              shape: options API
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
    <div class="bg">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.links {
  display: flex;
  justify-content: start;
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

.links a {
  /* margin: 0 1.5rem;
  font-size: 1.2rem;
  line-height: 1; */
}
</style>
