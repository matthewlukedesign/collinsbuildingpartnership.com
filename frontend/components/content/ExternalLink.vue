<template functional>
  <a
    class="text-red transition duration-300 hover:text-white"
    :href="props.href"
    target="_blank"
    rel="noopener"
  >
    <slot />
  </a>
</template>

<script>
export default {}
</script>
