// Utilities
import { defineStore } from 'pinia'
import { axios } from '@/plugins/axios'
export const useAllProductStore = defineStore('AllProduct', {
  state: () => ({
    products:[],
    //
  }),
  persist: true,
  // getters:{

  //   itemsCount(state){
  //     // console.log(state.items.length);
  //     return state.items.length;
  //   }
  // },
  actions:{
    LoadProducts() {
      axios.get('https://fakestoreapi.com/products')
          // .then(response => this.products = response.data)
          .then(console.log(this.products))


  },
  }
})


