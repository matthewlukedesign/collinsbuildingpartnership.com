<template>
  <main
    class="relative flex flex-col h-full pb-0 tablet lg:h-auto lg:min-h-full lg:flex-row"
  >
    <div
      class="flex flex-col h-full p-3 lg:h-auto lg:min-h-full lg:p-2 lg:pr-0 lg:w-1/2"
    >
      <LayoutHeader
        class="absolute transition-all duration-300 lg:relative lg:opacity-100"
        :class="mobileClicked ? ' opacity-0 delay-0' : 'delay-1000'"
      />
      <figure
        class="h-full transition-all duration-300 logomark"
        :class="mobileClicked ? 'opacity-0 delay-0 active' : ''"
      >
        <SvgLogomark
          @click.native="SET_ACTIVE(false)"
          class="relative block w-full h-full transition-all duration-300 cursor-pointer lg:hidden"
          :class="active ? 'opacity-0 delay-0' : ''"
        />
      </figure>
      <Nuxt class="-my-1 lg:min-h-screen-plus lg:-mt-20 lg:pt-20 md:pb-0" />

      <LayoutFooter class="hidden pt-24 pb-24 mt-auto lg:block" />
    </div>
    <LayoutFooter class="absolute bottom-0 p-3 -mb-1 lg:hidden lg:relative" />
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
    ...mapState(['settings', 'active', 'mobileClicked']),
  },
  methods: {
    ...mapMutations(['SET_ACTIVE', 'SET_SUB_ACTIVE', 'SET_MOBILE_CLICKED']),
  },
}
</script>
<style lang="scss">
@screen lg {
  .tablet {
    min-height: auto;
  }
}
.logomark {
  max-height: 2000px;
  &.active {
    max-height: 0px;
  }
}
</style>
