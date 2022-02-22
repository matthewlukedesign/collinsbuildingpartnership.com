<template>
  <main class="flex p-4 pb-0 h-full">
    <div class="w-1/2 min-h-full flex flex-col">
      <LayoutHeader />
      <Nuxt />
      <LayoutFooter />
    </div>
    <div class="w-1/2 h-full pl-12 relative text-xs">
      <div class="absolute w-7/12">
        <Content :blocks="settings.description" />
      </div>
      <SvgLogomark class="block w-full h-full relative" />
    </div>
  </main>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['settings']),
  },
}
</script>
