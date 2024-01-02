<template>
  <Carousel v-bind="settings" :wrap-around="false">
    <Slide v-for="(image, index) in arrayImages" :key="index">
      <div class="carousel__item">
        <img :src="`http://127.0.0.1:8000/img/` + image">
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import {url} from '../../../core/coreRequest';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    images: String
  },
  data() {
    return {
      arrayImages: [],
      urlImg: url,
      img: [],
      i: 0,
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
    }
  },
  created() {
    this.convertStringImageToArray(this.images)
  },
  methods: {
    convertStringImageToArray(images) {
      if (images) {
        return this.arrayImages = JSON.parse(images)
      }
      return this.arrayImages = []
    }
  },
}
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  color: var(--vc-clr-white);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__item img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.carousel__slide {
  padding: 10px;
}

</style>
