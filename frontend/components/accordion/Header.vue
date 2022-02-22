<template>
  <div class="increment">
    <header
      class="flex justify-between leading-none items-center pb-2 border-b border-current text-2xl md:text-3xl"
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
