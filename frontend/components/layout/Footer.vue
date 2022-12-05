<template>
  <footer>
    <span class="text-2xl cursor-pointer md:text-3xl text-red" @click="up"
      >From the Ground Up</span
    >
    <nav
      class="bottom-0 mt-4 text-xs lg:mt-24 footer"
      :class="!active && !subActive ? 'lg:pb-4 lg:fixed' : ''"
    >
      <Content :blocks="settings.footer"></Content>
    </nav>
  </footer>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['settings', 'active', 'subActive']),
  },
  methods: {
    up() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>
<style lang="scss">
.footer a {
  @apply text-white hover:text-red transition duration-300 #{!important};
}
</style>
