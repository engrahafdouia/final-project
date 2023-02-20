
import { defineStore } from 'pinia'
export const useProductStore = defineStore('Product', {
  state: () => ({
    productDetails:[],
  }),
  persist: true,
  getters:{
    },

  actions:{
    ShowProductDetails(product){

      this.productDetails=product;
     }
  }

})
