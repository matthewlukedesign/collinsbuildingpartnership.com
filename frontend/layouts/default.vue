<template>
  <main
    class="relative flex flex-col h-full pb-0 tablet lg:h-auto lg:min-h-full lg:flex-row"
  >
    <div
      class="flex flex-col h-screen p-3 lg:min-h-full lg:p-2 lg:pr-0 lg:w-1/2"
    >
      <LayoutHeader
        class="absolute transition-all duration-300 lg:relative lg:opacity-100"
        :class="active ? 'opacity-0 delay-0' : 'delay-1000'"
      />
      <SvgLogomark
        @click.native="SET_ACTIVE(false)"
        class="relative block w-full h-full transition-all duration-300 cursor-pointer lg:hidden"
        :class="active ? 'opacity-0 delay-0' : 'delay-1000'"
      />
      <Nuxt
        class="pb-2 mt-auto lg:min-h-screen-plus lg:-mt-20 lg:pt-20 md:pb-0"
      />

      <LayoutFooter class="hidden pt-24 pb-24 mt-auto lg:block" />
    </div>
    <LayoutFooter class="absolute bottom-0 p-2 -mb-1 lg:hidden lg:relative" />
    <div
      class="sticky top-0 hidden h-screen p-3 pt-4 pl-12 mb-auto text-xs lg:block lg:w-1/2"
    >
      <div class="absolute lg:w-7/12">
        <Content :blocks="settings.description" />
      </div>
      <SvgLogomark
        class="relative block w-full h-full cursor-pointer"
        @click.native="SET_ACTIVE(false)"
      />
    </div>
  </main>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['settings', 'active']),
  },
  methods: {
    ...mapMutations(['SET_ACTIVE', 'SET_SUB_ACTIVE']),
  },
}
</script>
<style lang="scss">
.tablet {
  min-height: calc(100vh + 4rem);
}
@screen md {
  .tablet {
    min-height: calc(100vh + 8rem);
  }
}
@screen lg {
  .tablet {
    min-height: auto;
  }
}
</style>
