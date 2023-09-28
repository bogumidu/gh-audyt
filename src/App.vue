<script setup lang="ts">
import { ref, computed, VueElement } from 'vue';
import AppNavigation from './components/AppNavigation.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Price from './components/Price.vue';
import Faq from './components/Faq.vue';
import Contact from './components/Contact.vue';

</script>

<template>
  <div class="app">
    <AppNavigation/>
    <div class="content">
      <Home/>
      <About/>
      <Price/>
      <Faq/>
      <Contact/>
    </div>
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

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

// .flex-row {
//   gap: 32px;
//   flex-direction: column;
//   align-items: center;
//   @media(min-width: 1000px) {
//     flex-direction: row;
//   }
// }

.section {
  display: flex;
  padding: 75px 0;
  width: 75%;
  margin: 0 auto;
  max-width: 1140px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  img {
    width: 0;
    @media (min-width: 1000px) {
      width: 85%;
    }
  }

  h2 {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    margin-block-start: 20px;
    margin-block-end: 20px;
  }

  h3 {
    font-size: 20px;
    margin-block-start: 8px;
    margin-block-end: 8px;
    margin-inline-start: 27px;
  }

  p {
    line-height: 1.7;
    font-size: 16px;

    strong {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .flex-row {
    display: flex;
    gap: 50px;
    flex-direction: row;
  }

  .left,
  .right {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    order: 1;
    justify-content: center;
  }
}

</style>
