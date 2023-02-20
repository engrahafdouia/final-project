<template>
  <v-footer
    dark
    padless
  >
<v-container>
    <v-card
      flat
      tile

          >

      <v-card-title class="teal d-flex justify-start" >
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn   class="mx-4"
         color="#000"
          icon
          href="mailto:majidakh1993@gmail.com">
          <v-icon size="24px" color="white">mdi-gmail</v-icon>

        </v-btn>
        <v-btn   class="mx-4"
         color="#000"
          icon
          href="https://github.com/majidakhoulani">
          <v-icon size="24px" color="white">mdi-github</v-icon>

        </v-btn>
        <v-btn   class="mx-4"
         color="#000"
          icon
          href="https://www.linkedin.com">
          <v-icon size="24px" color="white">mdi-linkedin</v-icon>

        </v-btn>
        <v-btn   class="mx-4"
         color="#000"
          icon
          to="">
          <v-icon size="24px" color="white">mdi-instagram</v-icon>

        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 text-center">
        2023 <router-link :to="{ name: 'about', params: { hash: '#aboutSection' } }"><strong class="text-black">Vuetify-Majida Khoulani</strong> </router-link>
      </v-card-text>
    </v-card>
  </v-container>

  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-gmail',
        'mdi-github',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),


  }
</script>
