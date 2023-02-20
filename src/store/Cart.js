// Utilities
import { defineStore } from 'pinia'

export const useCartStore = defineStore('Cart', {
  state: () => ({
    items:[],
  }),
  persist: true,
  getters:{

    itemsCount(state){
      // console.log(state.items.length);
      return state.items.length;
    }
  },
  actions:{
    addToCard(product){
      console.log(product)
      this.items.push(product);
    },
    //     addToCard(product,id){
    //       let productInCart = this.items.find(item=>{
    //         return item.product.id===product.id
    //       })
    //       if(productInCart){
    //         productInCart.amount+=amount
    //       }
    //   this.items.push(product);
    // },
    removeItem(index){
      this.items.splice(index,1)
    }
    // removeItem(productId) {
    //   //this.items.splice(index, 1)
    //   this.items = this.items.filter((product)=>{
    //   return product.id !== productId;


    //   }
    //   )}
  }
})


