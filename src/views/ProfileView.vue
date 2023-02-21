<template >

  <!--  -->
  <v-container>
    <v-row >

    <v-col cols="12" md="4" >

            <v-card  class="mx-auto  bg-indigo-lighten-3" width="300" height="400" >

                <v-avatar  size="170" rounded="50" class="ma-auto">
                    <v-img cover src="/assets/rahaf.jpg"></v-img>
                </v-avatar>
                <v-card-item>

                    <v-card-title class="text-h6 text-indigo pb-2">
                        {{ userInfo.firstName + ' ' + userInfo.lastName }}
                    </v-card-title>
                    <v-card-subtitle class="text-indigo">{{ userInfo.email }}</v-card-subtitle>
                    <v-card-text class="text-indigo">{{ userInfo.phone }}</v-card-text>
                </v-card-item>
                <v-card-actions class="d-flex justify-center">
                    <v-btn variant="outlined">
                        FOLLOW
                    </v-btn>
                    <v-btn variant="outlined" class="bg-indigo-darken-2">
                        MESSAGE
                    </v-btn>
                </v-card-actions>
            </v-card>


    </v-col>
    <v-col cols="12" md="6" >
                            <!-- <div class="d-flex  flex-column"> -->

                                  <v-card  class="mt-4">
                                <v-table>
                                    <thead>
                                        <tr class="bg-indigo-lighten-4">
                                            <th class="text-left text-indigo-darken-2">
                                                Information
                                            </th>
                                            <th class="text-left text-indigo-darken-2">
                                                Details
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-indigo-darken-4">Full Name</td>
                                            <td class="text-indigo-lighten-2">{{ userInfo . firstName }} {{ userInfo.lastName }}</td>
                                        </tr>
                                        <tr>
                                            <td class="text-indigo-darken-4">Age</td>
                                            <td class="text-indigo-lighten-2">{{ userInfo . age }}</td>
                                        </tr>
                                        <tr>
                                            <td class="text-indigo-darken-4">Gender</td>
                                            <td class="text-indigo-lighten-2">{{ userInfo . gender}}</td>
                                        </tr>
                                        <tr>
                                            <td class="text-indigo-darken-4">BirthDate</td>
                                            <td class="text-indigo-lighten-2">{{ userInfo . birthDate}}</td>
                                        </tr>
                                        <tr>
                                            <td class="text-indigo-darken-4">University</td>
                                            <td class="text-indigo-lighten-2">{{ userInfo . university}}</td>
                                        </tr>


                                    </tbody>
                                </v-table>
                            </v-card>




                            <!-- </div> -->



                        </v-col>
    </v-row>
  </v-container>
  </template>
  <!--  <template>{{ userInfo }} -->
  <!-- <img v-if="image" :key="image.id" @click="switchImage" class="image" :src="image.src" alt="image.alt">  </template>-->

  <script>

  import { mapState } from "pinia";
import { useUserStore } from "@/store/User";

  export default {
    data: () => ({
      userInfo: {},
      loading: false,
        selection: 1,
        items: [{
                      text: 'mdpjeanne',
                      icon: 'mdi-instagram'
                  },
                  {
                      text: 'mdnjeanneGit',
                      icon: 'mdi-github'
                  },
                  {
                      text: '@mdnjeanne',
                      icon: 'mdi-twitter'
                  },
                  {
                      text: 'jeanne',
                      icon: 'mdi-facebook'
                  },
              ],
    }),
    computed: {
      ...mapState(useUserStore, ["user"]),

    },

    created() {
      this.axios
        .get("https://dummyjson.com/users/" + this.user.id)
        .then((response) => {
          this.userInfo = response.data;
        });
    },
    methods: {
        reserve () {
          this.loading = true

          setTimeout(() => (this.loading = false), 2000)
        },
      },
  };
  </script>

  <style></style>
