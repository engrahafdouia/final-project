/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
//import { registerSW } from 'virtual:pwa-register'

import App from './App.vue'
import '../public/assets/main.css'
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

// const updateSW = registerSW({
//   onOfflineReady() {},
// })

