export const state = () => ({
  mission: [],
  settings: [],
  services: [],
  people: [],
  contact: [],
  people: [],
  active: false,
})

export const mutations = {
  SET_MISSION(state, mission) {
    state.mission = mission
  },
  SET_SETTINGS(state, settings) {
    state.settings = settings
  },
  SET_SERVICES(state, services) {
    state.services = services
  },
  SET_VACANCIES(state, vacancies) {
    state.vacancies = vacancies
  },
  SET_PEOPLE(state, people) {
    state.people = people
  },
  SET_CONTACT(state, contact) {
    state.contact = contact
  },
  SET_ACTIVE(state, active) {
    if (state.active == active) {
      state.active = false
    } else {
      state.active = active
    }
  },
}

import { groq } from '@nuxtjs/sanity'

export const actions = {
  async nuxtServerInit({ commit }) {
    let query = groq`*[_type == "mission" ] {title, sections[] {_type == 'content' => {_type, text}, _type == 'images' => {_type, images[] { "src" : asset._ref, "sizes" : {"width" : asset->metadata.dimensions.width, "height" : asset->metadata.dimensions.height}}}}} | order(_updatedAt desc)[0]`
    const mission = await this.$sanity.fetch(query)
    commit('SET_MISSION', mission)

    query = groq`*[_type == "settings" ] {description, footer} | order(_updatedAt desc)[0]`
    const settings = await this.$sanity.fetch(query)
    commit('SET_SETTINGS', settings)

    query = groq`*[_type == "service" ] {_id, title, sections[] {_type == 'content' => {_type, text}, _type == 'images' => {_type, images[] { "src" : asset._ref, "sizes" : {"width" : asset->metadata.dimensions.width, "height" : asset->metadata.dimensions.height}}}}} | order(_updatedAt desc)`
    const services = await this.$sanity.fetch(query)
    commit('SET_SERVICES', services)

    query = groq`*[_type == "vacancy" ] {title, location, link} | order(_updatedAt desc)`
    const vacancies = await this.$sanity.fetch(query)
    commit('SET_VACANCIES', vacancies)

    query = groq`*[_type == "people" ] {introduction, footer} | order(_updatedAt desc)[0]`
    const people = await this.$sanity.fetch(query)
    commit('SET_PEOPLE', people)

    query = groq`*[_type == "contact" ] {contacts} | order(_updatedAt desc)[0]`
    const contact = await this.$sanity.fetch(query)
    commit('SET_CONTACT', contact)
  },
}