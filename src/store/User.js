// Utilities
import { axios } from '@/plugins/axios'
import { defineStore } from 'pinia'
export const useUserStore = defineStore('User', {
  state: () => ({
    user:{},
    token:null
    //
  }),
  persist: true,

  getters: {
    isLoggedIn(state) {
      return !!state.user.token
    }
  },
  actions:{
    login(username, password) {
      axios.post('https://dummyjson.com/auth/login', {
          username: username,
          password: password
      })
        .then(
          response => {this.user = response.data
            // console.log(this.user.token)
          axios.defaults.headers.common['Authorization']='Bearer' + this.user.token
        }
          );
    },
    logout() {
      this.user = {}
      defaults.headers.common['Authorization']
    }
  }
})


