// Created thanks to John Komarnicki https://www.youtube.com/watch?v=u2AwJAFeaKc

<template>
  <section class="hero" id="home">
    <div class="container flex-row">
      <div class="left">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <div class="buttons">
          <a href="#faq" class="btn">Dlaczego warto?</a>
          <a href="#price" class="btn btn-light">Ceny</a>
        </div>
      </div>
      <img src="../../public/audyt.png" alt="">
    </div>
  </section>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>

.hero {
  padding: 150px 0;
  width: 100%;
  background: url('../../public/home-bg.png') center bottom no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  .flex-row {
    gap: 32px;
    flex-direction: column;
    align-items: center;
    @media(min-width: 1000px) {
      flex-direction: row;
    }
  }

  h2 {
    color:#fff;
    font-size: 40px;
    margin-bottom: 32px;
    text-align: center;
    @media(min-width: 1000px) {
      text-align: initial;
      font-size: 48px;
    }
  }

  .left {
    flex: 1;
    order: 1;
    justify-content: center;
    align-items: center;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 1000px) {
      flex-direction: row;
    }

    .btn {
      text-align: center;
      width: 250px;
      margin-bottom: 16px;
    @media(min-width: 1000px) {
      margin-right: 16px;
    }
    }
  }

  img {
    display: flex;
    flex: 1;
    order: 2;
    width: 85%;
    @media(min-width: 1000px) {
      width: 50%;
    }
  }

}

.flex-row {
  display: flex;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
}

</style>
