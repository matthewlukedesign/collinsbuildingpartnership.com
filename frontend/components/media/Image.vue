<template>
  <nuxt-img
    :src="image.src"
    provider="sanity"
    :width="image.sizes.width ? image.sizes.width : ''"
    :height="image.sizes.height ? image.sizes.height : ''"
    :sizes="sizes ? sizes : 'sm:100vw lg:100vw lg:1500px'"
  />
</template>
<script>
export default {
  props: ['image', 'sizes'],
}
</script>
