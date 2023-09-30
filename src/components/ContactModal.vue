// Created thanks to John Komarnicki https://www.youtube.com/watch?v=u2AwJAFeaKc

<template>
  <div class="modal-wrap" :class="{'display-none': !displayed}">
    <div class="modal">
      <img src="../../public/contact.png" alt="">
      <p>Dziękujemy za opaidj</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quam.</p>
      <button class="btn" @click="$emit('toggleModal')">Zamknij</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContactModal',
  props: ['displayed'],
}
</script>

<style lang="scss" scoped>

.modal-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);

  .modal {
    text-align: center;
    padding: 50px;
    border-radius: 8px;
    background-color: #fff;

    img {
      width: 250px;
      height: auto;
      margin-bottom: 16px;
    }

    p:nth-child(2) {
      font-size: 24px;
      margin-bottom: 8px;
    }

    .btn {
      margin-top: 24px;

      &:hover {
        border-color: #007bff;
        color: #007bff;
      }
    }
  }
}

.display-none {
  display: none;
}

</style>
