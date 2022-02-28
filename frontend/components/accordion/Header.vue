<template>
  <div class="increment">
    <header
      class="flex items-center justify-between pb-1 text-2xl leading-none border-b border-current md:text-3xl"
    >
      <span class="flex">{{ title }}</span>
    </header>
  </div>
</template>
<script>
export default {
  props: ['title'],
}
</script>
