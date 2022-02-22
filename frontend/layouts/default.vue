<template>
  <main class="flex flex-col md:flex-row p-4 pb-0 h-full">
    <div class="md:w-1/2 min-h-full flex flex-col">
      <LayoutHeader
        class="absolute md:relative transition-all duration-300 md:opacity-100"
        :class="active ? 'opacity-0 delay-0' : 'delay-1000'"
      />
      <SvgLogomark
        class="block w-full h-full relative md:hidden transition-all duration-300"
        :class="active ? 'opacity-0 delay-0' : 'delay-1000'"
      />

      <Nuxt class="mt-auto md:mt-0 pb-4 md:pb-0" />
      <LayoutFooter class="hidden md:block" />
    </div>
    <div class="hidden md:block md:w-1/2 h-full pl-12 relative text-xs">
      <div class="absolute md:w-7/12">
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
    ...mapState(['settings', 'active']),
  },
}
</script>
