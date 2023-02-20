import axios from 'axios'
import VueAxios from 'vue-axios'
import { useUserStore } from '@/store/User'
const store = JSON.parse(localStorage.getItem('useUserStore '))
if(store?.user?.token)
axios.defaults.headers.common['Authorization']='Bearer' + store.user.token
export { axios,VueAxios }
