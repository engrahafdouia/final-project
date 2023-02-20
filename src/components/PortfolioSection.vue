<template>
  <section class="portfolio text-center pt-16 pb-16">
      <div class="portfolio-title pt-6">
          <h1 class="text-h4 font-weight-bold pb-2 text-uppercase">
            <!-- PORTFOLIO -->  {{ $t('message.portfolio.sectionName') }}

          </h1>
          <p class="text-grey font-italic">{{ $t('message.portfolio.title') }}</p>
      </div>
      <div class="portfolio-content mt-12 ">
          <v-container>
              <v-row no-gutters>
                <!-- v-for="portfoli in  portfolioList " :key="portfoli.id" sm="4"-->
                  <v-col  cols="12"  class="d-flex  mb-8 justify-space-around"
                      >
                      <v-hover v-slot="{ isHovering, props }">
                          <v-card
                              v-bind="props">
                              <v-img src="/assets/images/portfolio/Seo1.jpg" height="200px" width="300px" cover> </v-img>


                              <v-card-title class="pt-4 pb-2">
                                SEO Project
                              </v-card-title>

                              <v-card-subtitle class="pb-6">
                                Website
                              </v-card-subtitle>
                              <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2"
              style="height: 100%;"
            >
            <v-btn   class="mx-4"
         color="#000"
          icon
          href="https://majidakhoulani.github.io/seo_project/" target="_blank"
         >
          <v-icon size="24px" color="#fff" >mdi-github</v-icon>
        </v-btn>
            </div>
          </v-expand-transition>
                          </v-card>
                          <v-card
                              v-bind="props">
                              <v-img src="/assets/images/portfolio/krypto.jpg" height="200px" width="300px" cover> </v-img>


                              <v-card-title class="pt-4 pb-2">
                                krypton Project
                              </v-card-title>

                              <v-card-subtitle class="pb-6">
                                Website
                              </v-card-subtitle>
                              <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2"
              style="height: 100%;"
            >
            <v-btn   class="mx-4"
         color="#000"
          icon
          href="https://majidakhoulani.github.io/Krypton-Api-Vue/"  target="_blank"
         >
          <v-icon size="24px" color="#fff" >mdi-github</v-icon>
        </v-btn>
            </div>
          </v-expand-transition>
                          </v-card>
                          <v-card
                              v-bind="props">
                              <v-img src="/assets/images/portfolio/vpn.jpg"  height="200px" width="300px" cover> </v-img>


                              <v-card-title class="pt-4 pb-2">
                                Bulma Project
                              </v-card-title>

                              <v-card-subtitle class="pb-6">
                                  Website
                              </v-card-subtitle>
                              <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2"
              style="height: 100%;"
            >
            <v-btn   class="mx-4"
         color="#000"
          icon
          href="https://majidakhoulani.github.io/fresh_bulma_project/" target="_blank"
         >
          <v-icon size="24px" color="#fff" >mdi-github</v-icon>
        </v-btn>
            </div>
          </v-expand-transition>
                          </v-card>
                          <!-- <v-card class="mx-auto" max-width="344"
                              v-bind="props">
                              <v-img src="/assets/images/portfolio/1.jpg" height="200px" cover> </v-img>


                              <v-card-title class="pt-4 pb-2">
                                Threads
                              </v-card-title>

                              <v-card-subtitle class="pb-6">
                                 WwbSitw Design
                              </v-card-subtitle>
                              <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2"
              style="height: 100%;"
            >
            <v-btn   class="mx-4"
         color="#000"
          icon
          href="#"
         >
          <v-icon size="24px" color="#fff" >mdi-github</v-icon>
        </v-btn>
            </div>
          </v-expand-transition>
                          </v-card>
                          <v-card class="mx-auto" max-width="344"
                              v-bind="props">
                              <v-img src="/assets/images/portfolio/2.jpg" height="200px" cover> </v-img>


                              <v-card-title class="pt-4 pb-2">
                                Explore
                              </v-card-title>

                              <v-card-subtitle class="pb-6">
                                Illustration
                              </v-card-subtitle>
                              <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2"
              style="height: 100%;"
            >
            <v-btn   class="mx-4"
         color="#000"
          icon
          href="#"
         >
          <v-icon size="24px" color="#fff" >mdi-github</v-icon>
        </v-btn>
            </div>
          </v-expand-transition>
                          </v-card>
                          <v-card class="mx-auto" max-width="344"
                              v-bind="props">
                              <v-img src="/assets/images/portfolio/3.jpg" height="200px" cover> </v-img>


                              <v-card-title class="pt-4 pb-2">
                                Finish
                              </v-card-title>

                              <v-card-subtitle class="pb-6">
                                Graphic Design
                              </v-card-subtitle>
                              <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2"
              style="height: 100%;"
            >
            <v-btn   class="mx-4"
         color="#000"
          icon
          href="#"
         >
          <v-icon size="24px" color="#fff" >mdi-github</v-icon>
        </v-btn>
            </div>
          </v-expand-transition>
                          </v-card> -->
                        </v-hover>
                  </v-col>
                  <v-col  cols="12"  class="d-flex  mb-8 justify-space-around"
                      >
                      <v-hover v-slot="{ isHovering, props }">
                          <!-- <v-card class="mx-auto" max-width="344"
                              v-bind="props">
                              <v-img src="/assets/images/portfolio/Seo1.jpg" height="200px" cover> </v-img>


                              <v-card-title class="pt-4 pb-2">
                                SEO Project
                              </v-card-title>

                              <v-card-subtitle class="pb-6">
                                Website
                              </v-card-subtitle>
                              <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2"
              style="height: 100%;"
            >
            <v-btn   class="mx-4"
         color="#000"
          icon
          href="https://majidakhoulani.github.io/seo_project/"
         >
          <v-icon size="24px" color="#fff" >mdi-github</v-icon>
        </v-btn>
            </div>
          </v-expand-transition>
                          </v-card>
                          <v-card class="mx-auto" max-width="344"
                              v-bind="props">
                              <v-img src="/assets/images/portfolio/krypto.jpg" height="200px" cover> </v-img>


                              <v-card-title class="pt-4 pb-2">
                                krypton Project
                              </v-card-title>

                              <v-card-subtitle class="pb-6">
                                Website
                              </v-card-subtitle>
                              <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2"
              style="height: 100%;"
            >
            <v-btn   class="mx-4"
         color="#000"
          icon
          href="https://majidakhoulani.github.io/Krypton-Api-Vue/"
         >
          <v-icon size="24px" color="#fff" >mdi-github</v-icon>
        </v-btn>
            </div>
          </v-expand-transition>
                          </v-card>
                          <v-card class="mx-auto" max-width="344"
                              v-bind="props">
                              <v-img src="/assets/images/portfolio/vpn.jpg" height="200px" cover> </v-img>


                              <v-card-title class="pt-4 pb-2">
                                Bulma Project
                              </v-card-title>

                              <v-card-subtitle class="pb-6">
                                  Website
                              </v-card-subtitle>
                              <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2"
              style="height: 100%;"
            >
            <v-btn   class="mx-4"
         color="#000"
          icon
          href="https://majidakhoulani.github.io/fresh_bulma_project/"
         >
          <v-icon size="24px" color="#fff" >mdi-github</v-icon>
        </v-btn>
            </div>
          </v-expand-transition>
                          </v-card> -->
                          <v-card
                              v-bind="props">
                              <v-img src="/assets/images/portfolio/1.jpg" height="200px" width="300px" cover> </v-img>


                              <v-card-title class="pt-4 pb-2">
                                Threads
                              </v-card-title>

                              <v-card-subtitle class="pb-6">
                                 Website 
                              </v-card-subtitle>
                              <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2"
              style="height: 100%;"
            >
            <v-btn   class="mx-4"
         color="#000"
          icon
          href="#" target="_blank"
         >
          <v-icon size="24px" color="#fff" >mdi-github</v-icon>
        </v-btn>
            </div>
          </v-expand-transition>
                          </v-card>
                          <v-card
                              v-bind="props">
                              <v-img src="/assets/images/portfolio/2.jpg" height="200px" width="300px" cover> </v-img>


                              <v-card-title class="pt-4 pb-2">
                                Explore
                              </v-card-title>

                              <v-card-subtitle class="pb-6">
                                Illustration
                              </v-card-subtitle>
                              <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2"
              style="height: 100%;"
            >
            <v-btn   class="mx-4"
         color="#000"
          icon
          href="#" target="_blank"
         >
          <v-icon size="24px" color="#fff" >mdi-github</v-icon>
        </v-btn>
            </div>
          </v-expand-transition>
                          </v-card>
                          <!-- class="mx-auto" max-width="344"  class="ma-2 pa-2" -->
                          <v-card
                              v-bind="props">
                              <v-img src="/assets/images/portfolio/3.jpg" height="200px" width="300px" cover> </v-img>


                              <v-card-title class="pt-4 pb-2">
                                Finish
                              </v-card-title>

                              <v-card-subtitle class="pb-6">
                                Graphic Design
                              </v-card-subtitle>
                              <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-orange v-card--reveal text-h2"
              style="height: 100%;"
            >
            <v-btn   class="mx-4"
         color="#000"
          icon
          href="#" target="_blank"
         >
          <v-icon size="24px" color="#fff" >mdi-github</v-icon>
        </v-btn>
            </div>
          </v-expand-transition>
                          </v-card>
                        </v-hover>
                  </v-col>
              </v-row>
          </v-container>
      </div>
  </section>
</template>
<script>
export default{
  data(){
    return{
      portfolioList: [
      {
                  id: 1,
                  src: '/assets/images/portfolio/Seo1.jpg',
                  title: 'SEO Project',
                  explain: 'Website',
                  href:'https://majidakhoulani.github.io/seo_project/'
              },
              {
                  id: 2,
                  src: '/assets/images/portfolio/krypto.jpg',
                  title: 'krypton Project',
                  explain: ' Website',
                  href:'https://majidakhoulani.github.io/Krypton-Api-Vue/'
              },
              {
                  id: 3,
                  src: '/assets/images/portfolio/vpn.jpg',
                  title: 'Bulma Project',
                  explain: 'Website',
                  href:'https://majidakhoulani.github.io/fresh_bulma_project/'
              },
        {
                  id: 4,
                  src: '/assets/images/portfolio/1.jpg',
                  title: 'Threads',
                  explain: 'Illustration',
                  href:''
              },
              {
                  id: 5,
                  src: '/assets/images/portfolio/2.jpg',
                  title: 'Explore',
                  explain: 'Graphic Design',
                  href:''
              },
              {
                  id: 6,
                  src: '/assets/images/portfolio/3.jpg',
                  title: 'Finish',
                  explain: 'Identity',
                  href:''
              },
              {
                  id: 7,
                  src: '/assets/images/portfolio/4.jpg',
                  title: 'Southwest',
                  explain: 'Website Design'

              },
              {
                  id: 8,
                  src: '/assets/images/portfolio/6.jpg',
                  title: 'Window',
                  explain: 'Photography'
              },
              {
                  id: 9,
                  src: '/assets/images/portfolio/5.jpg',
                  title: 'Lines',
                  explain: 'Branding'
              },

          ],
          transparent: 'rgba(255, 255, 255, 0)',
    }
  }
}
</script>
<style
>
  .portfolio
 {
      background-color: #F8F9FA;
  }
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .8;
    position: absolute;
    width: 100%;
  }
</style>
