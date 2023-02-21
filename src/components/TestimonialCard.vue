<template class="bg-purpleme">
<v-row>

  <v-col  >
    <v-card
    class="mx-auto bg-bluedark"

    elevation="20"
    max-width="700" height="200"

  >
    <div class="d-flex justify-between">
      <v-card-title class="flex-grow-1 flex-column align-start">

        <div class="text-h6 font-weight-thin">"{{trucate( body) }}"</div>

        <div class="text-h6 font-weight-thin"></div>
      </v-card-title>

      <v-img
        contain
        height="100px"
        src="/assets/free-user-profile-icon-4255-thumb.png"
        style="flex-basis: 125px"
        class="flex-grow-0"
      ></v-img>
    </div>

    <!-- <v-divider></v-divider> -->

    <v-card-actions class="pa-4">


      <v-spacer></v-spacer>

      <span class="text-grey-lighten-2 text-left text-caption me-2">
       {{trucateT( title) }}
      </span>

      <v-rating
        v-model="rating"
        color="white"
        active-color="yellow-accent-4"
        half-increments
        hover
        size="18"
      ></v-rating>
    </v-card-actions>
  </v-card>
        </v-col>
</v-row>
</template>
  <!-- <v-card data-aos="zoom-in-up"  class=" w-100 h-100 bg-purpleme "  >

      <v-row>
          <v-col class="text-center ">

          </v-col>
      </v-row>

      <v-card-text class=" py-5 text-center text-h6">
          {{ title }}
      </v-card-text>

      <v-card-actions>
          <v-list-item class="w-100">
               <p class="text-subtitle-1  text-center text-black" >{{body}}</p>
               <v-avatar color="grey-darken-3 "
                     image="../assets/team_04.jpg"></v-avatar>
          </v-list-item>
      </v-card-actions>
   <div class="text-center">
      <v-rating

      v-model="rating"
      color="white"
      active-color="yellow-accent-4"
      half-increments
      hover
      size="18"
    ></v-rating>
   </div>
  </v-card>-->
<script>
export default {
  props: {
      id: Number,
      name: String,
      location: String,
      body: String,
      avatar: String,
      title: String,
      lorem: String,

  },
 data() {
  return {
     rating: 2.5,
     images:[
      {src:'../assets/team_04.jpg',
    },
    {src:'../assets/03.png',
    }
    ,
    {src:'../assets/40.png',
    }
     ]
  }
 },
 methods:{
  trucate (value, length = 50) {
   return value.length <= length ?
     value : value.substring(0, length) + "...";
 },
 trucateT (value, length = 10) {
   return value.length <= length ?
     value : value.substring(0, length) + "...";
 }
 }
}
</script>
