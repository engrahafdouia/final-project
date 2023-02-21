<template>
  <section class="section-header mt-5">
    <h2 class="text-h4 text-center font-weight-bold mb-2">{{ $t('message.cat') }}</h2>

    <v-container class="mt-5 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" md="4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card data-aos="fade-up"
              class="mx-auto"
              color="grey-lighten-4"
              max-width="300"
              v-bind="props"
            >
              <v-img
                :aspect-ratio="16 / 9"
                cover
                src="/assets/dell-SGY0LIfTKZ4-unsplash.jpg"
              >
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-purpleme v-card--reveal text-h2"
                    style="height: 100%"
                  >
                  <h5 class="text-h5">$14</h5>

                  </div>
                </v-expand-transition>
              </v-img>

              <v-card-text class="pt-6">
                <div class="font-weight-light text-grey text-h6 mb-2">
             Laptops
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card data-aos="fade-up"
              class="mx-auto"
              color="grey-lighten-4"
              max-width="300"
              v-bind="props"
            >
              <v-img
                :aspect-ratio="16 / 9"
                cover
                src="/assets/imgmost.jpg"
              >
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-purpleme v-card--reveal text-h2"
                    style="height: 100%"
                  >
                  <h5 class="text-h5">$143</h5>

                  </div>
                </v-expand-transition>
              </v-img>

              <v-card-text class="pt-6">
                <div class="font-weight-light text-grey text-h6 mb-2">
                  fragrances
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card data-aos="fade-up"
              class="mx-auto"
              color="grey-lighten-4"
              max-width="300"
              v-bind="props"
            >
              <v-img
                :aspect-ratio="16 / 9"
                cover
                src="/assets/mo.jpg"
              >
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-purpleme v-card--reveal text-h2"
                    style="height: 100%"
                  >
                  <h5 class="text-h5">$34.99</h5>

                  </div>
                </v-expand-transition>
              </v-img>

              <v-card-text class="pt-6">
                <div class="font-weight-light text-grey text-h6 mb-2">
                  smartphones
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card data-aos="fade-up"
              class="mx-auto"
              color="grey-lighten-4"
              max-width="300"
              v-bind="props"
            >
              <v-img
                :aspect-ratio="16 / 9"
                cover
                src="/assets/TSC-Jul202-768x512.webp"
              >
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-purpleme v-card--reveal text-h2"
                    style="height: 100%"
                  >
                  <h5 class="text-h5">$14.99</h5>

                  </div>
                </v-expand-transition>
              </v-img>

              <v-card-text class="pt-6">
                <div class="font-weight-light text-grey text-h6 mb-2">
                  skincare
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card data-aos="fade-up"
              class="mx-auto"
              color="grey-lighten-4"
              max-width="300"
              v-bind="props"
            >
              <v-img
                :aspect-ratio="16 / 9"
                cover
                src="/assets/most.jpg"
              >
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-purpleme v-card--reveal text-h2"
                    style="height: 100%"
                  >
                  <h5 class="text-h5">$14.99</h5>

                  </div>
                </v-expand-transition>
              </v-img>

              <v-card-text class="pt-6">
                <div class="font-weight-light text-grey text-h6 mb-2">
                  home-decoration
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card data-aos="fade-up"
              class="mx-auto"
              color="grey-lighten-4"
              max-width="300"
              v-bind="props"
            >
              <v-img
                :aspect-ratio="16 / 9"
                cover
                src="/assets/211213-wee-groceries-se-405p-a36212.jpg"
              >
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-purpleme v-card--reveal text-h2"
                    style="height: 100%"
                  >
                    <h5 class="text-h5">$14.99</h5>
                  </div>
                </v-expand-transition>
              </v-img>

              <v-card-text class="pt-6">
                <div class="font-weight-light text-grey text-h6 mb-2">
                  groceries
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script></script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
