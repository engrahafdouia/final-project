<template>

          <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false"  color="#8D8C8D">
              <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" colro="#78F3E9" class="text-blue-darken-4" nav>
                  <template v-slot:append>
                      <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
                  </template>
              </v-list-item>
              <v-divider></v-divider>
              <v-list dense nav>
                  <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard" to="/dashboard">
                  </v-list-item>
                  <v-list-item prepend-icon="mdi-cart" title="products" value="product"  to="/productInfo" ></v-list-item>
                  <v-list-item prepend-icon="mdi-account" title="users" value="users" to="/userInfo"></v-list-item>
              </v-list>
              <template v-slot:append>
                  <div class="pa-2">
                    <v-btn block to="/">
          <span style="font-size:14px">back</span>
        </v-btn>
                  </div>
              </template>
          </v-navigation-drawer>
</template>
<script>

  export default {
      data() {
          return {
              drawer: true,
              items: [{
                      title: 'Dashboard',
                      icon: 'mdi-view-dashboard'
                  },
                  {
                      title: 'products',
                      icon: 'mdi-account'
                  },
                  {
                      title: 'users',
                      icon: 'mdi-account'
                  },
              ],
              rail: true,
                }
              }
  }
</script>
