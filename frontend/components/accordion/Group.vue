<template>
  <div class="increment">
    <header
      class="flex items-center justify-between pb-2 text-2xl leading-none border-b border-current cursor-pointer md:text-3xl"
      @click="SET_ACTIVE(id)"
    >
      <span class="flex">{{ title }}</span>
      <svg
        class="w-4 h-auto mt-2 transition-opacity duration-300 fill-current text-red"
        :class="id == active ? 'opacity-100' : 'opacity-0'"
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
      <div v-if="active == id">
        <Accordion
          :increment="false"
          v-for="service in accordions"
          :key="service._id"
          :id="service._id"
          :group="true"
          :title="service.title"
          :sections="service.sections"
        />
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: ['accordions', 'title', 'id'],
  computed: {
    ...mapState(['active', 'contact']),
  },
  methods: {
    ...mapMutations(['SET_ACTIVE']),
  },
}
</script>
