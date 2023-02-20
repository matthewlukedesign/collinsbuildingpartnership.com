<template>
  <footer
    class="transition-all duration-300 md:opacity-100"
    :class="mobileClicked && !active ? 'delay-300' : 'opacity-0 '"
  >
    <span class="text-2xl cursor-pointer md:text-3xl text-red" @click="up"
      >From the Ground Up</span
    >
    <nav
      class="bottom-0 hidden mt-4 text-xs md:block lg:mt-24 footer"
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
    ...mapState(['settings', 'active', 'subActive', 'mobileClicked']),
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
