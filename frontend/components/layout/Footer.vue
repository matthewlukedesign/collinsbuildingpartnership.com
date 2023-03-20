<template>
  <footer
    class="transition-all duration-300 lg:opacity-100"
    :class="mobileClicked && !active ? 'delay-300' : 'opacity-0 '"
  >
    <span
      class="text-2xl cursor-pointer md:text-3xl text-red"
      @click=";[up, UNSET_MOBILE_CLICKED()]"
      >From the Ground Up</span
    >
    <nav
      class="bottom-0 hidden mt-4 text-xs lg:block lg:mt-24 footer"
      :class="!active && !subActive ? 'lg:pb-4 lg:fixed' : ''"
    >
      <Content :blocks="settings.footer"></Content>
    </nav>
  </footer>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['settings', 'active', 'subActive', 'mobileClicked']),
  },
  methods: {
    ...mapMutations(['UNSET_MOBILE_CLICKED']),
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
