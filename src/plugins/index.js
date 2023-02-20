/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import AOS from 'aos'
import 'aos/dist/aos.css'
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import {axios,VueAxios} from './axios'
import VueApexCharts from "vue3-apexcharts";
import i18n from '@/i18n'
import VWave from 'v-wave'

export function registerPlugins (app) {
  loadFonts()
  app
  .use(vuetify)
  .use(router)
  .use(pinia)
  .use(VueAxios, axios)
  .use(i18n)
  .use(AOS.init())
  .use(VueApexCharts)
  .use(VWave)
}
