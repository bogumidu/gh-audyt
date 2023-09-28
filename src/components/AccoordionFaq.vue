// Created thanks to John Komarnicki https://www.youtube.com/watch?v=u2AwJAFeaKc

<template>
  <div class="accordin-faq">
    <div class="question" :class="{'open': faq.open}">
      {{ faq.question }}
      <i class="fas fa-plus" :class="{'icon-active': faq.open}" @click="$emit('toggleOpen', index)"></i>
    </div>
    <Transition name="accordin-answer"
      @before-enter="beforeEnter" @enter="enter"
      @before-leave="beforeLeave" @leave="leave"
    >
      <div class="answer" v-show="faq.open">{{ faq.answer }}</div>
    </Transition>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AccordinFaq',
  props: ['faq', 'index', 'open'],
  methods: {
    beforeEnter: function(el) {
      el.style.height = '0'
    },
    enter: function(el) {
      el.style.height = (el.scrollHeight + 10) + 'px';
      el.style.opacity = '1';
    },
    beforeLeave: function(el) {
      el.style.height = (el.scrollHeight + 10) + 'px';
      el.style.opacity = '0';
    },
    leave: function(el) {
      el.style.height = '0';
    }
  }
}
</script>

<style lang="scss" scoped>
  .accordin-faq {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1140px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;

    .question {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding-left: 8px;
      color: #3c3c3c;
      font-size: 20px;
      transition: all 0.4s linear;

      .open {
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
      }

      i {
        cursor: pointer;
        padding: 8px 8px;
        transition: 150ms ease all;
      }

      .icon-active {
        transform: rotate(135deg);
      }
    }

    .answer {
      display: flex;
      justify-content: flex-start;
      padding: 8px;
      color: #3c3c3c;
      // scale: 1 0;
      transition: 150ms ease-out;
    }
  }
</style>
