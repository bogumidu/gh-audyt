<script setup lang="ts">
import { ref, computed, VueElement } from 'vue';
import AppNavigation from './components/AppNavigation.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Price from './components/Price.vue';
import Faq from './components/Faq.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

let displayModal = true

function toggleModal() {
  console.log('toggling')
  displayModal = !displayModal;
}

</script>

<template>
  <div class="app">
    <AppNavigation/>
    <div class="content">
      <Home/>
      <About/>
      <Price/>
      <Faq/>
      <Contact
        @toggleModal="toggleModal"
      />
      <Footer/>
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

.btn {
  cursor: pointer;
  display: inline-block;
  padding: 14px 40px;
  background-color: #007bff;
  color: #fff;
  border-radius: 45px;
  border: 2px solid transparent;
  font-weight: 600;
  transition: 500ms ease all;

  &:hover {
    background-color: transparent;
    border-color: #fff;
  }
}

.btn-light {
  background-color: transparent;
  border-color: #fff;

  &:hover {
    background-color: #007bff;
    border-color: transparent;
  }
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
