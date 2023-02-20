// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAdminProductsStore = defineStore('AdminProducts', {
state: () => ({
products:[],
ProductName:'',
Category:'',
id:0
//
}),
persist: true,
getters:{

getProducts(state){
return state.products
},
getProductsCount(state){
return state.products.length
},
},
actions:{
async fetchProducts() {
try {
const data = await axios.get('https://dummyjson.com/products')
this.products= data.data.products
}
catch (error) {
alert(error)
console.log(error)
}
},
// addNewProduct(product) {
// this.products.push({ product, id: this.id++ })

// },
// saveData(){
// const id=this.products.length+1
// const data={
// id:id,
// title: this.ProductName,
// category:this.Category
// }
// this.products.push(data)

// },

removeProduct(productId) {
//this.products.splice(index, 1)
this.products = this.products.filter((product)=>{
return product.id !== productId;


}
)}
},

})
