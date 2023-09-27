<script setup lang="ts">
import { ref, computed, VueElement } from 'vue';
import AppNavigation from './components/AppNavigation.vue';
import Home from './components/Home.vue';
import Price from './components/Price.vue';
import Contact from './components/Contact.vue';
import Faq from './components/Faq.vue';

const routes = {
  'gh-audyt/': Home,
  'gh-audyt/price': Price,
  'gh-audyt/contact': Contact,
  'gh-audyt/faq': Faq
}

function getRoute(match: string) {
  const routesKeys: string[] = Object.keys(routes);
  const routesValues: any[] = Object.values(routes);
  const index = routesKeys.indexOf(match);
  return index >= 0 ? routesValues[index] : routesValues[0];
}

console.log(Object.values(routes));

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView: any = computed(() => {
  return getRoute(currentPath.value.slice(1));
})

</script>

<template>
  <div class="app">
    <AppNavigation/>
    <component :is="currentView" />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

.app {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
</style>
