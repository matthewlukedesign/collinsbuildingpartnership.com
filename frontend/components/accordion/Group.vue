<template>
  <div class="increment">
    <header
      class="flex items-center justify-between pb-1 text-2xl leading-none border-b border-current cursor-pointer group md:text-3xl"
      @click="SET_ACTIVE(id)"
    >
      <span class="flex">{{ title }}</span>
      <svg
        class="h-auto mt-2 transition-opacity duration-300 opacity-0 fill-current w-7 text-red group-hover:opacity-100"
        :class="id == active ? 'opacity-100' : ''"
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.49597 4.604L4.49997 8.204L0.503971 4.604L0.503971 3.2L3.98397 6.404L3.98397 0.0439985L4.99197 0.0439986L4.99197 6.428L8.49597 3.2L8.49597 4.604Z"
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
