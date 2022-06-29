<template>
  <div class="space-y-2">
    <div
      v-swiper:mySwiper="swiperOptions"
      @slideChange="onSlideChange"
      v-if="project.images"
      class="relative group"
    >
      <nav
        class="absolute inset-0 z-50 flex items-center justify-between w-full h-full p-2 transition duration-300 opacity-0 group-hover:opacity-100"
      >
        <button class="pointer-events-auto prev">
          <svg
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-auto mt-2 transition-opacity duration-300 fill-current w-7 text-red group-hover:opacity-100"
          >
            <path
              d="M4.01812 8.11993L0.418123 4.12393L4.01812 0.127929L5.42212 0.12793L2.21812 3.60793L8.57812 3.60793L8.57812 4.61593L2.19412 4.61593L5.42212 8.11993L4.01812 8.11993Z"
            />
          </svg>
        </button>
        <button class="pointer-events-auto next">
          <svg
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-auto mt-2 transition-opacity duration-300 fill-current w-7 text-red group-hover:opacity-100"
          >
            <path
              d="M4.97797 0.127874L8.57797 4.12387L4.97797 8.11987L3.57397 8.11987L6.77797 4.63987L0.417969 4.63987L0.417969 3.63187L6.80197 3.63187L3.57397 0.127874L4.97797 0.127874Z"
            />
          </svg>
        </button>
      </nav>

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
        navigation: {
          nextEl: '.next',
          prevEl: '.prev',
        },
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
