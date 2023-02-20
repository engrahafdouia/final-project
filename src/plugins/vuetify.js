/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme:'light',
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          purpleme:'#2333B0',
          mov:'#2B176F',
          greenlight:'#03F1DE',
          greyme:'#f4f4f4',
          purpleblue:'#2333B0',
          bluelight:'#6870CB',
          darkme:'#222222',
          herocolor:'#D6DBDE',
          movlight:'#9fa8da',
          bluedark:"#5671897c"
        },
      },
      dark: {
        colors: {
          // primary: '#white',
       //   secondary: '#5CBBF6',
        },
      },
    },
  },
})
