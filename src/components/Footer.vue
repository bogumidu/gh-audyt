// Created thanks to John Komarnicki https://www.youtube.com/watch?v=u2AwJAFeaKc

<template>
  <footer>
    <div class="column">
      <div class="flex-row">
        <div>tel.+48123456789</div>
        <div>tel.+48123456789</div>
        <div>mail@email.com</div>
      </div>
      <div class="flex-row">
        <div class="credits"><a href="https://www.freepik.com/free-vector/icons-set-drawn-flat-style-different-factory-workers_4268141.htm#query=Engineer&position=10&from_view=search&track=sph">Image by macrovector</a> on Freepik</div>
        <div class="credits"><a href="https://www.freepik.com/icon/safety_842436">Icon by Freepik</a></div>
        <div class="credits">Code and design by <a href="https://github.com/bogumidu">Bogumidu</a></div>
      </div>
      <div class="flex-row credits">
        <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/bogumidu/gh-audyt">gd-audyt</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/bogumidu">Bogumidu</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>

footer {
  width: 100%;
  padding: 70px;
  padding-top: 120px;
  margin: 0 auto;
  margin-bottom: 0;
  background: url('../../public/footer-bg.png') center bottom no-repeat;
  background-size: cover;

  color:#fff;
  text-align: center;
  @media(min-width: 1200px) {
    text-align: initial;
    font-size: 20px;
  }
  
  a {
    font-weight: 500;
    color: #fff;
  }
  
  .credits {
    color: #a6a6a6;
    a {
    font-weight: 500;
      color: #a6a6a6;
    }
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .flex-row {
    display: flex;
    gap: 32px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(min-width: 1000px) {
      flex-direction: row;
    }
  }
}



</style>
