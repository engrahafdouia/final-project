 <template>
     <section class="login text-center pt-16 pb-16">
         <div class="login-title pt-6">
             <h1 class="text-h4 font-weight-bold pb-2 text-dark">Login In</h1>
             <p class="text-grey font-italic">Welcome To Our Website</p>
         </div>
         <div class="login-content mt-12 ">
             <v-container>
                 <v-row no-gutters>
                     <v-col cols="4" class="ma-auto">
                         <v-form @submit.prevent="submit">
                             <v-text-field v-model="username" label="User Name"></v-text-field>

                             <v-text-field v-model="password" type="password" label="Password">
                             </v-text-field>
                             <v-btn color="#ffc800" elevation="2" class="mt-12 pa-2 h-50" width="150px"
                                 type="submit">
                                 <span class="text-white text-uppercase text-h6">LogIn</span>
                             </v-btn>
                         </v-form>
                     </v-col>
                 </v-row>
             </v-container>
         </div>
     </section>

     <TheFooter />
 </template>
 <script>
     import {
         mapActions
     } from 'pinia';
     import {
         useUserStore
     } from '@/store/User';
     import TheFooter from '@/components/TheFooter.vue';
     export default {
         components: {
             TheFooter,
         },
         data() {
             return {
                 username: 'kminchelle',
                 password: '0lelplR',
             }
         },
         methods: {
             submit() {
                 this.login(this.username, this.password)
             },
             ...mapActions(useUserStore, ['login'])
         }
     }
 </script>
 <style>
     .login {
         background-color: #F8F9FA;
     }
 </style>
