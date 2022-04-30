import Vue from 'vue'
import { Swiper, Autoplay, Mousewheel } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([Autoplay, Mousewheel])
Vue.use(VueAwesomeSwiper)
