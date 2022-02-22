<template>
  <div :class="increment ? 'increment' : ''">
    <header
      class="flex cursor-pointer justify-between leading-none items-center pb-2 border-b border-current text-2xl md:text-3xl"
      @click="SET_ACTIVE(id)"
    >
      <span class="flex">{{ title }}</span>
      <svg
        class="w-4 h-auto mt-2 fill-current text-red transition-opacity duration-300"
        :class="id == active ? 'opacity-100' : 'opacity-0'"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 19.5C15.2467 19.5 19.5 15.2467 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5Z"
        />
      </svg>
    </header>
    <transition name="slide">
      <div class="overflow-hidden" v-if="active == id">
        <div class="pb-12 space-y-4 pt-4" v-if="sections">
          <div v-for="(section, index) in sections" :key="index">
            <div
              v-if="section._type == 'images'"
              :class="
                section.images.length == 1 ? 'w-8/12' : 'grid grid-cols-2 gap-2'
              "
            >
              <div v-for="(image, index) in section.images" :key="index">
                <MediaImage :image="image" />
              </div>
            </div>
            <div v-else>
              <Content :blocks="section.text"></Content>
            </div>
          </div>
        </div>
        <div
          v-else-if="introduction || footer || vacancies"
          class="pb-12 space-y-4 pt-4"
        >
          <div v-if="introduction">
            <Content :blocks="introduction"></Content>
          </div>
          <div v-if="vacancies">
            <div
              class="flex pt-1 relative border-b border-current"
              :class="
                vacancy.link
                  ? 'group hover:text-red transition duration-300'
                  : ''
              "
              v-for="vacancy in vacancies"
              :key="vacancy._id"
            >
              <a
                :href="vacancy.link"
                v-if="vacancy.link"
                target="_blank"
                class="absolute w-full h-full block"
              ></a>
              <span class="uppercase w-7/12">{{ vacancy.title }}</span>
              <span class="w-5/12 flex justify-between"
                >{{ vacancy.location }}
                <figure
                  class="text-red group-hover:text-white transition duration-300"
                >
                  ↗
                </figure>
              </span>
            </div>
          </div>
          <div v-if="footer">
            <Content :blocks="footer"></Content>
          </div>
        </div>
        <div v-else-if="form" class="pb-12 space-y-4 pt-4">
          <Form />
          <div v-for="contact in contact.contacts" :key="contact._key">
            <span class="uppercase">{{ contact.title }}</span>
            <Content :blocks="contact.content"></Content>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: [
    'title',
    'sections',
    'index',
    'id',
    'increment',
    'introduction',
    'vacancies',
    'footer',
    'form',
  ],
  computed: {
    ...mapState(['active', 'contact']),
  },
  methods: {
    ...mapMutations(['SET_ACTIVE']),
  },
}
</script>
