<template>
  <section class="service text-center pt-6 pb-6">
      <div class="service-title pt-6">
          <h1 class="text-h4 font-weight-bold pb-2 text-uppercase">
            <!-- SERVICES -->  {{ $t('message.service.sectionName') }}
          </h1>
          <p class="text-grey font-italic">
            <!-- Lorem ipsum dolor sit amet consectetur. --> {{ $t('message.service.title') }}
          </p>
      </div>
      <div class="service-content">
          <v-container>
              <v-row no-gutters>
                <!-- v-for="service in serviceList " :key="service.id" -->
                  <v-col  cols="12"   class="d-flex  mb-6 justify-space-around">
                      <v-sheet class="ma-2 pa-2">
                        <!-- :aspect-ratio="aspectRatio" -->
                          <v-img class="ma-auto"  src="/assets/images/services/service1.jpg" cover
                              width="150" height="150"></v-img>
                          <h4 class="subheading pa-4 font-weight-bold">E-Commerce</h4>
                          <p class="text-medium-emphasis">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>

                      </v-sheet>
                      <v-sheet class="ma-2 pa-2">
                        <!-- :aspect-ratio="aspectRatio" -->
                          <v-img class="ma-auto"  src="/assets/images/services/service1.jpg" cover
                              width="150" height="150"></v-img>
                          <h4 class="subheading pa-4 font-weight-bold">Responsive Design</h4>
                          <p class="text-medium-emphasis">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>

                      </v-sheet>
                      <v-sheet class="ma-2 pa-2">
                        <!-- :aspect-ratio="aspectRatio" -->
                          <v-img class="ma-auto"  src="/assets/images/services/service1.jpg" cover
                              width="150" height="150"></v-img>
                          <h4 class="subheading pa-4 font-weight-bold">Web Security</h4>
                          <p class="text-medium-emphasis">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>

                      </v-sheet>
                  </v-col>
              </v-row>
          </v-container>
      </div>
  </section>
</template>
<script setup>

// export default{
//   data(){
//     return{
//       serviceList: [{
//                   id: 1,
//                   src: '/assets/images/services/service1.jpg',
//                   title: 'E-Commerce',
//                   explain: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
//               },
//               {
//                   id: 2,
//                   src: '/assets/images/services/service2.jpg',
//                   title: 'Responsive Design',
//                   explain: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
//               },
//               {
//                   id: 3,
//                   src: '/assets/images/services/service3.jpg',
//                   title: 'Web Security',
//                   explain: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'
//               }
//           ]
//     }
//   }
// }
</script>
