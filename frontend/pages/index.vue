<template>
  <div class="flex flex-col list">
    <Accordion
      increment="true"
      id="mission"
      :title="mission.title"
      :sections="mission.sections"
    />
    <AccordionHeader title="Services" v-if="services.length" />
    <Accordion
      :increment="false"
      v-for="service in services"
      :key="service._id"
      :id="service._id"
      :title="service.title"
      :sections="service.sections"
    />
    <Accordion
      :increment="true"
      id="people"
      title="People & Careers"
      :introduction="people.introduction"
      :vacancies="vacancies"
      :footer="people.footer"
    />
    <Accordion :increment="true" id="contact" title="Contact us" :form="true" />
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['mission', 'services', 'people', 'vacancies']),
  },
}
</script>
<style lang="scss">
.list {
  counter-set: list;
  > div {
    @apply relative;
    header {
      @apply pl-14;
    }
  }
  .increment {
    counter-increment: list;
    header {
      span {
        &:before {
          content: '0' counter(list) '.';
          @apply block absolute left-0 mr-4;
        }
      }
    }
  }
}
</style>
