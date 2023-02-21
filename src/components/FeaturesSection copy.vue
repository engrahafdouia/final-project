<template>
  <section class="section-header sect mt-5 ">
    <h2 class="text-h4 text-center pt-5 font-weight-bold "> {{ $t("featuresSection.title") }}</h2>

    <v-container class="mt-5 text-center ">
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <template v-for="(item, i) in items" :key="i">
          <v-col
            cols="12"
            md="4"
          >

          <v-hover>
        <template v-slot:default="{ hover }">

              <v-card v-wave="{
   color:'#567189',
    initialOpacity: 0.5,
    easing: 'ease-in',
}"  data-aos="zoom-in-down"
              :elevation="hover ? 24 : 6"


              >
            <v-img
                  :src="item.img"
                  height="225px"
                  cover
                >
                  <v-card-title class="text-h6  d-flex flex-column">

                    <p class="mt-4">
                      <v-btn

                      variant="text"
                      class="bg-bluelight-lighten-1"
  color="indigo"
                      :icon="item.icon"
                    ></v-btn>
                      <!-- <v-icon>  {{ item.icon }}</v-icon> -->
                    </p>
                     <p class="mt-4 bg-bluelight-lighten-1">
                      {{ item.title }}
                    </p>

                    <div>
                      <p class="ma-0 text-body-1 font-weight-bold">
                        {{ item.text }}
                      </p>
                      <p class="text-caption font-weight-medium">
                        {{ item.subtext }}
                      </p>
                    </div>
                  </v-card-title>
                  <div class="align-self-center">

                  </div>
                </v-img>
              </v-card>
            </template>
      </v-hover>
          </v-col>
        </template>
      </v-row>

    </v-container>

  </section>


  </template>

  <script>
    export default {
      data: () => ({
        // icons: ['mdi-home', 'mdi-play', 'mdi-draw'],
        items: [
          {
            icon:'mdi-home',
            title: 'Web design',
            text: `It's New Release Friday`,
            subtext: 'Newly released songs. Updated daily.',
            // img: '../../public/img/pct.png',
          },
          {
            icon:'mdi-draw',
            title: 'Web Developement',
            text: 'Greatest Rock Hits',
            subtext: 'Lose yourself in rock tunes.',
            // img: '../../public/img/pexels-andrea-piacquadio-974911.jpg',
          },
          {
            icon:'mdi-database',
            title: 'Problem solving',
            text: 'Ambient Bass',
            subtext: 'Chill beats to mellow you out.',
            // img: '../../public/img/pexels-andrea-piacquadio-974911.jpg',
          },
        ],
        // transparent: 'rgba(255, 255, 255, 0)',
      }),
    }
  </script>
  <style>
  .sect{
    background-color: #5671891f;

  }
  .section-header{
    position: relative;
  }
   .section-header h2:after {
      content: "";
      position: absolute;
      display: block;
      width: 100px;
      height: 4px;
      background:#2333B0;
      left: 0;
      right: 0;
      bottom: 0;
  top: 0px;
      margin: auto;
      margin-top: 60px;
  }
  h2::first-letter{
    color: #2333B0;;
  }
  </style>
