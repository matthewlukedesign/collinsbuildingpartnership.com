<template>
  <div :class="increment ? 'increment' : ''">
    <header
      class="flex items-center justify-between pb-1 text-2xl leading-none border-b border-current cursor-pointer group md:text-3xl"
      @click="SET_ACTIVE(id)"
    >
      <span class="flex">{{ title }}</span>
      <svg
        class="w-6 h-auto mt-2 transition-opacity duration-300 opacity-0 fill-current text-red group-hover:opacity-100"
        :class="id == active ? 'opacity-100' : ''"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 19.5C15.2467 19.5 19.5 15.2467 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5Z"
        />
      </svg>
    </header>
    <transition name="slide">
      <div class="overflow-hidden text-sm leading-tight" v-if="active == id">
        <div class="pt-4 pb-12 space-y-4 divide-y divide-white">
          <section v-for="project in projects" :key="project._id" class="pt-4">
            <Slider :project="project" />
          </section>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: [
    'title',
    'sections',
    'index',
    'id',
    'increment',
    'introduction',
    'vacancies',
    'footer',
    'form',
    'group',
    'projects',
  ],
  computed: {
    ...mapState(['active', 'contact']),
  },
  methods: {
    onSlideChange(swiper) {
      this.current = swiper.activeIndex + 1
    },
    ...mapMutations(['SET_ACTIVE']),
    toggle() {
      this.active = !this.active
    },
  },
}
</script>
