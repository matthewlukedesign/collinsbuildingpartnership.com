export const state = () => ({
  mission: [],
  settings: [],
  services: [],
  projects: [],
  people: [],
  contact: [],
  people: [],
  active: false,
  subActive: false,
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
  SET_PROJECTS(state, projects) {
    state.projects = projects
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
  SET_SUB_ACTIVE(state, active) {
    if (state.subActive == active) {
      state.subActive = false
    } else {
      state.subActive = active
    }
  },
}

import { groq } from '@nuxtjs/sanity'

export const actions = {
  async nuxtServerInit({ commit }) {
    let query = groq`*[_type == "mission" ] {title, sections[] {_type == 'content' => {_type, text}, _type == 'images' => {_type, images[] {_type == "image" => {_type, "src" : asset._ref, "sizes" : {"width" : asset->metadata.dimensions.width, "height" : asset->metadata.dimensions.height}},  _type == "video" => {"video" : asset->playbackId, "aspect" : asset->data.aspect_ratio}}}}} | order(_updatedAt desc)[0]`
    const mission = await this.$sanity.fetch(query)
    commit('SET_MISSION', mission)

    query = groq`*[_type == "settings" ] {description, footer} | order(_updatedAt desc)[0]`
    const settings = await this.$sanity.fetch(query)
    commit('SET_SETTINGS', settings)

    query = groq`*[_type == "service" ] {_id, title, sections[] {_type == 'content' => {_type, text}, _type == 'images' => {_type, images[] {_type == "image" => {_type, "src" : asset._ref, "sizes" : {"width" : asset->metadata.dimensions.width, "height" : asset->metadata.dimensions.height}},  _type == "video" => {"video" : asset->playbackId, "aspect" : asset->data.aspect_ratio}}}}} | order(order asc)`
    const services = await this.$sanity.fetch(query)
    commit('SET_SERVICES', services)

    query = groq`*[_type == "project" ] {_id, title, description, images[] { _type == "image" => {_type, "src" : asset._ref, "sizes" : {"width" : asset->metadata.dimensions.width, "height" : asset->metadata.dimensions.height}},  _type == "video" => {"video" : asset->playbackId, "aspect" : asset->data.aspect_ratio}}} | order(title asc)`
    const projects = await this.$sanity.fetch(query)
    commit('SET_PROJECTS', projects)

    query = groq`*[_type == "vacancy" ] {title, location, link} | order(order desc)`
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
