<template>
  <div class="">
    <Splide
      :options="{
        rewind: true,
        gap: 30,
        type: 'loop',
        arrows: false,
        perPage: 3,
        pagination: false,
        autoScroll: {
          speed: 0.5,
        },
        breakpoints: {
          640: {
            perPage: 1,
          },
          1050: {
            perPage: 2,
          },
          1454: {
            perPage: 3,
          },
          2000: {
            perPage: 3,
          },
        },
      }"
      :extensions="extensions"
      aria-label="My Favorite Images"
    >
      <SplideSlide v-for="(card, index) in cards" :key="index">
        <img :class="index === 6 ? 'addPosition' : ''" :src="card.img" alt="" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// Default theme
import "@splidejs/vue-splide/css";

export default {
  components: { Splide, SplideSlide },
  data() {
    return {
      extensions: {
        AutoScroll,
      },
      cards: [
        {
          img: "/images/kuk1.jpeg",
        },
        {
          img: "/images/kuk2.jpeg",
        },
        {
          img: "/images/kuk3.jpeg",
        },
        {
          img: "/images/kuk8.jpeg",
        },
        {
          img: "/images/event1.jpeg",
        },
        {
          img: "/images/event2.jpeg",
        },
        {
          img: "/images/event3.jpeg",
        },
        {
          img: "/images/event4.jpeg",
        },
        {
          img: "/images/winner1.jpeg",
        },
        {
          img: "/images/winner2.jpeg",
        },
        {
          img: "/images/winner3.jpeg",
        },
        // {
        //   img: "/images/kuk1.jpeg",
        // },
        // {
        //   img: "/images/kuk1.jpeg",
        // },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
