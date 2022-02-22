<template>
  <footer class="pt-12 mt-auto pb-4">
    <span class="text-2xl md:text-3xl text-red">From the Ground Up</span>
    <nav class="mt-12 text-xs footer">
      <Content :blocks="settings.footer"></Content>
    </nav>
  </footer>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['settings']),
  },
}
</script>
<style lang="scss">
.footer a {
  @apply text-white hover:text-red transition duration-300 #{!important};
}
</style>
