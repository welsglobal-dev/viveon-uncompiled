<template>
  <div class="slider">
    <div
      class="slides"
      :style="{ transform: `translateX(-${current * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
      >
        <img :src="slide" alt="Slide image" />
      </div>
    </div>

    <!-- Dots navigation -->
    <div class="dots">
      <span
        v-for="(_, index) in slides"
        :key="index"
        class="dot"
        :class="{ active: index === current }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import slide1 from '@/assets/hero-banner-one.png'
import slide2 from '@/assets/hero-banner-two.jpg'
import slide3 from '@/assets/hero-banner-three.jpg'
import slide4 from '@/assets/hero-banner-four.jpg'

const slides = [slide1, slide2, slide3, slide4]

const current = ref(0)

const goToSlide = (index) => {
  current.value = index
}
</script>

<style scoped>
/* Slider container */
.slider {
  position: relative;
  width: 70%;
  max-height: 470px;
  overflow: hidden;
}

/* Slides wrapper */
.slides {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
}

/* Individual slide */
.slide {
  min-width: 100%;
  height: 100%;
}

/* Image styling */
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 10px;
}

/* Dots */
.dots {
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  transition: background 0.3s ease;
}

.dot.active {
  background: #5bf9ed;
}
</style>
