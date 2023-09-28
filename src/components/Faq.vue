// Created thanks to John Komarnicki https://www.youtube.com/watch?v=u2AwJAFeaKc

<template>
  <section id="faq" class="section faq">
    <div class="info">
      <h2>Pytania i odpowiedzi</h2>
    </div>
    <AccoordionFaq 
      v-for="(faq, i) in faqs" 
      :faq="faq" 
      :index="i"
      :key="i"
      :open="faq.open"
      @toggleOpen="toggleOpen"
    />
  </section>
</template>

<script lang="ts">
import AccoordionFaq from "./AccoordionFaq.vue";

export default {
  components: { AccoordionFaq },
  data(): {
    faqs: {
      question: string;
      answer: string;
      open: boolean;
    }[];
  } {
    return {
      faqs: [
        {
          question: "1Lorem ipsum dolor sit amet?",
          answer:
            "1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium modi, atque illum, dolorum placeat obcaecati incidunt ipsa ab quis commodi, quo cupiditate hic qui saepe architecto. Eius cumque, amet aperiam a veritatis omnis! Iure recusandae cumque corrupti veniam consequatur.",
          open: false,
        },
        {
          question: "2Lorem ipsum dolor sit amet?",
          answer:
            "2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium modi, atque illum, dolorum placeat obcaecati incidunt ipsa ab quis commodi, quo cupiditate hic qui saepe architecto. Eius cumque, amet aperiam a veritatis omnis! Iure recusandae cumque corrupti veniam consequatur.",
          open: false,
        },
        {
          question: "3Lorem ipsum dolor sit amet?",
          answer:
            "3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium modi, atque illum, dolorum placeat obcaecati incidunt ipsa ab quis commodi, quo cupiditate hic qui saepe architecto. Eius cumque, amet aperiam a veritatis omnis! Iure recusandae cumque corrupti veniam consequatur.",
          open: false,
        },
        {
          question: "4Lorem ipsum dolor sit amet?",
          answer:
            "4Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium modi, atque illum, dolorum placeat obcaecati incidunt ipsa ab quis commodi, quo cupiditate hic qui saepe architecto. Eius cumque, amet aperiam a veritatis omnis! Iure recusandae cumque corrupti veniam consequatur.",
          open: false,
        },
        {
          question: "5Lorem ipsum dolor sit amet?",
          answer:
            "5Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium modi, atque illum, dolorum placeat obcaecati incidunt ipsa ab quis commodi, quo cupiditate hic qui saepe architecto. Eius cumque, amet aperiam a veritatis omnis! Iure recusandae cumque corrupti veniam consequatur.",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleOpen: function (index: number) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open
        } else faq.open = false;
        return faq;
      })
    }
  }
};
</script>

<style lang="scss" scoped>
  .faq {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
</style>
