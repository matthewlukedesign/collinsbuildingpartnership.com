<template>
  <div>
    <PortableText :blocks="blocks" :serializers="serializers" />
  </div>
</template>

<script>
import PortableText from 'sanity-blocks-vue-component'
import ExternalLink from './ExternalLink'
import InternalLink from './InternalLink'

export default {
  components: {
    PortableText,
  },
  props: {
    blocks: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      serializers: {
        marks: {
          link: ExternalLink,
          internalLink: InternalLink,
        },
      },
    }
  },
}
</script>
<style scoped lang="scss">
p {
  &:after {
    white-space: break-spaces;
    content: '\a\a';
  }
  &:last-of-type {
    &:after {
      @apply hidden;
    }
  }
}
ul {
  @apply mt-5;
  li {
    @apply relative pl-5;
    &:before {
      @apply absolute left-0 top-0 text-red w-2 h-2 block bg-contain;
      content: '→';
    }
  }
}
</style>
