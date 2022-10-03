<script setup>
import examples from '~/data/examples-store'
import CodeEditor from '~/components/CodeEditor.vue'
import SetupStoreWithStoreToRefs from './stores/SetupStoreWithStoreToRefs.vue'
import SetupStoreWtihoutStoreToRefs from './stores/SetupStoreWtihoutStoreToRefs.vue'
import SetupStoreObject from './stores/SetupStoreObject.vue'
</script>

<template>
  <div class="page page-stores">
    <h1>Store</h1>

    <p>
      Pinia docs:
      <a
        href="https://pinia.vuejs.org/core-concepts/#setup-stores"
        target="_blank"
        >Setup Stores</a
      >
    </p>

    <SetupStoreWithStoreToRefs
      title="setup store, using storeToRefs in component">
      <CodeEditor :content="examples.withStoreToRefs" />
    </SetupStoreWithStoreToRefs>

    <SetupStoreWtihoutStoreToRefs title="what if we don't use storeToRefs?">
      <p>
        Nope! This doesn't work. In Vue dev tools the pinia values are updated,
        but the component doesn't notice.
      </p>
      <CodeEditor :content="examples.withoutStoreToRefs" />
    </SetupStoreWtihoutStoreToRefs>

    <SetupStoreObject title="also not using storeToRefs... but this works?!">
      <p>
        No <code>storeToRefs</code> in component, but the content of the store
        is all contained in one object. I don't understand why this doesn't
        require <code>storeToRefs</code> like the above.
      </p>
      <CodeEditor :content="examples.setupObject" />
    </SetupStoreObject>
  </div>
</template>

<style scoped>
.user-prop {
  font-size: 1.3rem;
  margin-bottom: 2rem;
}

.user-prop.avatar .emoji {
  font-size: 3rem;
}

@media (min-width: 768px) {
  .user-wrap {
    display: flex;
    align-items: center;
  }
  .user-wrap .user-prop {
    flex: 0 0 50%;
  }
}

.avatars-list button {
  margin: 0 1rem;
  padding: 0.4rem;
  font-size: 2rem;
  background-color: #fff;
  border: 2px solid var(--color-rose-3);
}
.avatars-list button:hover,
.avatars-list button:focus {
  background-color: var(--color-rose-2);
  border-color: var(--color-orange-3);
}
</style>
