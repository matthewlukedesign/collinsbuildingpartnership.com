<template>
  <div class="w-8/12">
    <form action="#" class="grid grid-cols-2 gap-2 text-xs" v-if="!thanks">
      <input
        type="text"
        v-model="name"
        autocomplete="Name"
        placeholder="Name*"
        required
      />
      <input type="email" autocomplete="Email" placeholder="Email*" required />
      <input type="text" class="col-span-2" required placeholder="Subject*" />
      <textarea placeholder="Message*" class="col-span-2" required />
      <footer class="flex justify-end col-span-2">
        <button
          @click="send"
          v-if="!loading"
          class="w-auto p-2 px-4 leading-none uppercase rounded-full cursor-pointer bg-red"
        >
          Send
        </button>
        <span v-else class="p-2 px-4 leading-none">Sending...</span>
      </footer>
    </form>
    <div v-else>{{ thanks }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      loading: false,
      thanks: false,
    }
  },
  methods: {
    async send() {
      this.loading = true
      await this.$axios
        .$post('https://getform.io/f/9f1206ad-1a03-4f5e-af20-e2058cf59c02', {
          message: `Name: ${this.name}, Email: ${this.email}, Subject: ${this.subject}, Message: ${this.message}`,
        })
        .then(
          (response) => (
            (this.thanks =
              'Thank you. We’ll review your message and reply as soon as possible.'),
            (this.loading = false)
          )
        )
        .catch((error) => console.log(error))
    },
  },
}
</script>
<style scoped lang="scss">
input,
textarea {
  @apply p-0.5 appearance-none rounded-none text-black;
  &:focus {
    @apply outline-none;
  }
}
textarea {
  @apply h-20;
}
</style>
