<template>
  <header class="mb-12 leading-none">
    <h1
      class="hidden text-2xl cursor-pointer lg:block md:text-3xl"
      @click="SET_ACTIVE(false)"
    >
      Collins Building Partnership
    </h1>
    <h1 class="text-6xl lg:hidden md:text-3xl">CBP</h1>
  </header>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['SET_ACTIVE', 'SET_SUB_ACTIVE']),
  },
}
</script>
