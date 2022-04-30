<template>
  <div class="space-y-2">
    <div
      v-swiper:mySwiper="swiperOptions"
      @slideChange="onSlideChange"
      v-if="project.images"
    >
      <div class="relative w-full swiper-wrapper">
        <figure
          v-for="image in project.images"
          :key="image.asset"
          class="relative w-full swiper-slide h-aspect"
        >
          <MediaImage :image="image" v-if="image._type == 'image'" />
          <MediaVideo :id="image.video" :aspect="image.aspect" v-else />
        </figure>
      </div>
    </div>
    <footer class="flex text-xs">
      <div class="w-1/2">
        <h2 class="font-mono uppercase text-red">
          {{ project.title }}
          <br />
          <span v-if="project.images"
            >{{ current }}/{{ project.images.length }}</span
          >
        </h2>
      </div>
      <div>
        <Content :blocks="project.description"></Content>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 1,
      swiperOptions: {
        mousewheel: {
          releaseOnEdges: true,
        },
        slidesPerView: 1,
      },
    }
  },
  methods: {
    onSlideChange(swiper) {
      this.current = swiper.activeIndex + 1
    },
  },
  props: ['project'],
}
</script>
