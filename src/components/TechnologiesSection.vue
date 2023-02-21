<template>


<section class="mt-12" >
  <h2 class="text-h4 text-center font-weight-bold pt-6 ">{{ $t('message.Technologies') }}</h2>


  <v-container class="ma-auto">
    <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-grey-lighten-3"
      show-arrows
    >
      <v-slide-group-item

        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-card
          color="grey-lighten-1"
          :class="['ma-5', selectedClass]"
          height="100"
          width="100"
          @click="toggle"
        >
        <v-img src="/assets/html-5-svgrepo-com.svg"></v-img>
          <!-- <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div> -->
        </v-card>
        <v-card
          color="grey-lighten-4"
          :class="['ma-5', selectedClass]"
          height="100"
          width="100"
          @click="toggle"
        >
        <v-img src="/assets/css-3-svgrepo-com.svg"></v-img>
          <!-- <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div> -->
        </v-card>
        <v-card
          color="grey-lighten-4"
          :class="['ma-5', selectedClass]"
          height="100"
          width="100"
          @click="toggle"
        >
        <v-img src="/assets/bulma-svgrepo-com.svg"></v-img>
          <!-- <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div> -->
        </v-card>
        <v-card
          color="grey-lighten-4"
          :class="['ma-5', selectedClass]"
          height="100"
          width="100"
          @click="toggle"
        >
        <v-img src="/assets/javascript-logo-svgrepo-com.svg"></v-img>
          <!-- <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div> -->
        </v-card>
        <v-card
          color="grey-lighten-4"
          :class="['ma-5', selectedClass]"
          height="100"
          width="100"
          @click="toggle"
        >
        <v-img src="/assets/vue-vuejs-javascript-js-framework-svgrepo-com.svg"></v-img>
          <!-- <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div> -->
        </v-card>
        <v-card
          color="grey-lighten-4"
          :class="['ma-5', selectedClass]"
          height="100"
          width="100"
          @click="toggle"
        >
        <v-img src="/assets/vuetify-logo-3BCF73C928-seeklogo.com.png"></v-img>
          <!-- <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div> -->
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
    <!-- <v-row>
<v-col cols="12" md="4">
 <v-img  height="100px" width="100px" cover class="rounded-circle" src="../assets/css-3-svgrepo-com.svg"></v-img>
  </v-col>
  <v-col cols="12" md="4">
 <v-img  height="100px" width="100px" cover class="rounded-circle" src="../assets/html-5-svgrepo-com.svg"></v-img>
  </v-col>
  <v-col cols="12" md="4">
 <v-img  height="100px" width="100px" cover  src="../assets/bulma.svg"></v-img>
  </v-col>

  <v-col cols="12" md="4">
 <v-img  height="100px" width="100px" cover class="rounded-c ircle" src="../assets/javascript-logo-svgrepo-com.svg"></v-img>
  </v-col>
  <v-col cols="12" md="4">
 <v-img  height="100px" width="100px" cover class="rounded-circle" src="../assets/vue-vuejs-javascript-js-framework-svgrepo-com.svg"></v-img>
  </v-col>
  <v-col cols="12" md="4">
 <v-img  height="100px" width="100px" cover  src="../assets/vuetify-logo-3BCF73C928-seeklogo.com.png"></v-img>
  </v-col>
</v-row> -->

<!-- <SwiperLanguage/> -->



<!-- <SwiperLanguageSlider/> -->









<!-- <v-row>
<v-col cols="12" md="4">
 <v-img  height="100px" width="100px" cover class="rounded-circle" src="../assets/html5-icon-6652-thumb.png"></v-img>
  </v-col>
  <v-col cols="12" md="4">
 <v-img  height="100px" width="100px" cover class="rounded-circle" src="../assets/CSS3_logo.svg.png"></v-img>
  </v-col>
  <v-col cols="12" md="4">
 <v-img  height="100px" width="100px" cover class="rounded-circle" src="../assets/bulma.svg"></v-img>
  </v-col>
</v-row>
<v-row>
<v-col cols="12" md="4">  <v-img  height="100px" width="100px" cover class="rounded-circle" src="../assets/295-2954420_vue-js-logo-svg-hd-png-download.png"></v-img>
  </v-col>
  <v-col cols="12" md="4"> <v-img  height="100px" width="100px" cover class="rounded-circle" src="../assets/javascript.svg"></v-img>
  </v-col>
  <v-col cols="12" md="4">  <v-img  height="100px" width="100px" cover class="rounded-circle" src="../assets/vuetify-logo-3BCF73C928-seeklogo.com.png"></v-img>
  </v-col>
</v-row> -->
<!-- <InfiniteLoading @infinite="loadData" /> -->

  </v-container>


</section>

</template>
<script >
 export default {
    data: () => ({
      model: null,
    }),
  }
// import SwiperLanguage from '@/components/SwiperLanguage.vue';
// import SwiperLanguageSlider from './SwiperLanguageSlider.vue';

  // import InfiniteLoading from "v3-infinite-loading";
  // import "v3-infinite-loading/lib/style.css"; //required if you're not going to override default slots

  // const loadData = ($state) {
  //     //calling the api
  // }
</script>

