<template>
  <header class="mb-12 leading-none">
    <h1
      class="hidden text-2xl cursor-pointer lg:block md:text-3xl"
      @click="SET_ACTIVE(false)"
    >
      Collins Building Partnership
    </h1>
    <h1 class="-my-2 text-6xl md:text-8xl lg:hidden">CBP</h1>
  </header>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['mobileClicked']),
  },
  methods: {
    ...mapMutations(['SET_ACTIVE', 'SET_SUB_ACTIVE']),
  },
}
</script>
