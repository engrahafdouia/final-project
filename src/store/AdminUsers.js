// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAdminUsersStore = defineStore('AdminUsers', {
  state: () => ({
    users:[],
    id:0
    //
  }),
  persist: true,
  getters:{

    getUsers(state){
      return state.users
    },
    getUsersCount(state){
      return state.users.length
    },

  },
  actions:{
    async fetchUsers() {
      try {
        const data = await axios.get('https://dummyjson.com/users')
          this.users= data.data.users
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
      },
      //  addNewProduct(product) {
      //   this.products.push({ product, id: this.id++ })
      // },

      removeUser(userId) {
        //this.products.splice(index, 1)
        this.users = this.users.filter((user)=>{
        return user.id !== userId;


      }
      )}
  },

})




