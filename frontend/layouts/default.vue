<template>
  <main
    class="relative flex flex-col h-full pb-0 md:h-auto md:min-h-full md:flex-row"
  >
    <div class="flex flex-col min-h-full p-3 md:p-2 md:pr-0 md:w-1/2">
      <LayoutHeader
        class="absolute transition-all duration-300 md:relative md:opacity-100"
        :class="active ? 'opacity-0 delay-0' : 'delay-1000'"
      />
      <SvgLogomark
        class="relative block w-full h-full transition-all duration-300 md:hidden"
        :class="active ? 'opacity-0 delay-0' : 'delay-1000'"
      />

      <Nuxt class="pb-2 mt-auto md:mt-0 md:pb-0" />
      <LayoutFooter class="hidden md:block" />
    </div>
    <div
      class="sticky top-0 hidden h-screen p-3 pt-4 pl-12 mb-auto text-xs md:block md:w-1/2"
    >
      <div class="absolute md:w-7/12">
        <Content :blocks="settings.description" />
      </div>
      <SvgLogomark class="relative block w-full h-full" />
    </div>
  </main>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['settings', 'active']),
  },
}
</script>
