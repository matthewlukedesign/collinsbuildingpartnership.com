<template>
  <div :class="increment ? 'increment' : ''">
    <header
      class="flex items-center justify-between pb-1 text-2xl leading-none border-current cursor-pointer group md:text-3xl"
      :class="!hideBorder ? 'border-b' : ''"
      @click="group ? SET_SUB_ACTIVE(id) : SET_ACTIVE(id)"
    >
      <span class="flex">{{ title }}</span>
      <svg
        class="w-6 h-auto mt-2 transition-opacity duration-300 opacity-0 fill-current text-red group-hover:opacity-100"
        :class="id == active || id == subActive ? 'opacity-100' : ''"
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
      <div
        class="overflow-hidden text-sm leading-tight"
        v-if="group ? subActive == id : active == id"
      >
        <div class="pt-4 pb-12 space-y-4" v-if="sections">
          <div v-for="(section, index) in sections" :key="index">
            <div
              v-if="section._type == 'images'"
              :class="
                section.images.length == 1 ? 'w-full' : 'grid grid-cols-2 gap-2'
              "
            >
              <div v-for="(image, index) in section.images" :key="index">
                <MediaImage :image="image" v-if="image._type == 'image'" />
                <MediaVideo :id="image.video" :aspect="image.aspect" v-else />
              </div>
            </div>
            <div v-else>
              <Content :blocks="section.text"></Content>
            </div>
          </div>
        </div>
        <div
          v-else-if="introduction || footer || vacancies"
          class="pt-4 pb-12 space-y-4"
        >
          <div v-if="introduction">
            <Content :blocks="introduction"></Content>
          </div>
          <div v-if="vacancies">
            <div
              class="relative flex pt-1 border-b border-current"
              :class="
                vacancy.link
                  ? 'group hover:text-red transition duration-300'
                  : ''
              "
              v-for="vacancy in vacancies"
              :key="vacancy._id"
            >
              <SanityFile
                :asset-id="vacancy.pdf.asset._ref"
                v-if="vacancy.link == 'PDF' && vacancy.pdf"
              >
                <template #default="{ src }">
                  <a
                    class="absolute block w-full h-full"
                    target="_blank"
                    :href="src"
                  ></a>
                </template>
              </SanityFile>
              <a
                :href="vacancy.link"
                v-if="vacancy.link && vacancy.link == 'url'"
                target="_blank"
                class="absolute block w-full h-full"
              ></a>
              <span class="w-7/12 uppercase">{{ vacancy.title }}</span>
              <span class="flex justify-between w-5/12"
                >{{ vacancy.location }}
                <figure
                  class="transition duration-300 text-red group-hover:text-white"
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
        <div v-else-if="form" class="pt-4 pb-12 space-y-4">
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
    'group',
    'hideBorder',
  ],
  computed: {
    ...mapState(['active', 'contact', 'subActive']),
  },
  methods: {
    ...mapMutations(['SET_ACTIVE', 'SET_SUB_ACTIVE']),
    toggle() {
      this.active = !this.active
    },
  },
}
</script>
