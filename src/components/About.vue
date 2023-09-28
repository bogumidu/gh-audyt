// Created thanks to John Komarnicki https://www.youtube.com/watch?v=u2AwJAFeaKc

<template>
  <section id="about" class="section about">
    <div class="flex-row">
      <div v-show="showImages" class="left">
        <img src="../../public/about-image.png" alt="">
      </div>
      <div class="right">
        <h2>Audyty energetyczne</h2>
        <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum veniam est similique culpa ex accusamus voluptates. Necessitatibus, nam perspiciatis nemo officia architecto repellendus modi veniam, qui ea, voluptas aliquam.</p>
        <p class="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse molestias ad labore, maiores laboriosam fugiat perferendis, sit nam, dicta error quasi laborum iure aliquid molestiae?</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data(): {
    showImages: boolean | null;
    windowWidth: number | null;
  } {
    return {
      showImages: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();

  },
  methods: {
    checkScreen(): void {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 1000) {
        this.showImages = false;
        return;
      }
      this.showImages = true;
      return
    },
  }
}
</script>

<style lang="scss" scoped>

.about {
  .flex-row {
    .left {
      justify-content: flex-end;
      align-items: flex-end;
      img {
        justify-content: flex-end;
      }
    }
  }

  p {
    text-indent: 40px;
  }
}

</style>
