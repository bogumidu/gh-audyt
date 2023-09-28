// Created thanks to John Komarnicki https://www.youtube.com/watch?v=u2AwJAFeaKc

<template>
  <section class="section pricing" id="price">
    <div class="flex-row">
      <div class="left">
        <div class="info"><h2>Cennik szczegółowy</h2></div>
        <h3>Z kompletem dokumentów</h3>
        <div class="flex-row">
          <i class="fas fa-circle"></i>
          <div class="info">
            <p><strong>Lokal</strong> - Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="flex-row">
          <i class="fas fa-circle"></i>
          <div class="info">
            <p><strong>Dom</strong> - Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="flex-row">
          <i class="fas fa-circle"></i>
          <div class="info">
            <p><strong>Lokal użytkowy</strong> - Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="flex-row">
          <i class="fas fa-circle"></i>
          <div class="info">
            <p><strong>Lokal użytkowy</strong> - Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="flex-row">
          <i class="fas fa-circle"></i>
          <div class="info">
            <p><strong>Budynek komercyjny</strong> - Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <h3>Koszt inwentaryzacji</h3>
        <div class="flex-row">
          <i class="fas fa-circle"></i>
          <div class="info">
            <p><strong>Inwentaryzacja lokalu</strong> - Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="flex-row">
          <i class="fas fa-circle"></i>
          <div class="info">
            <p><strong>Inwentaryzacja budynku</strong> - Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div v-show="showImages" class="right">
        <img src="../../public/price-image.png" alt="">
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

.pricing {

  .flex-row {
    width: 100%;
      justify-content: flex-start;
      gap: 10px;
    }
  .left {
    align-items: flex-start;

    .flex-row {
      justify-content: flex-start;
      gap: 10px;
    }

    .info {
      width: 100%;
    }

    i {
      margin-top: 4px;
      scale: 0.7;
    }
  }
}

</style>
