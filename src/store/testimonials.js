// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'

export const usetestimonialsStore = defineStore('testimonials', {
  state: () => ({
    testimonialsList:[],
  }),
  persist: true,
  getters:{

    getTestimonials(state){
      return state.testimonialsList
    },
  },
  actions:{
    async fetchTestimonials() {

      const data= await  axios.get('https://testimonialapi.toolcarton.com/api')
         this.testimonialsList =data.data

      }
  },

})

