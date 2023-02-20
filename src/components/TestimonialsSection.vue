<template>
    <section class="testimonials text-center pt-16 pb-16">
        <div class="testimonials-title pt-6">
            <h1 class="text-h4 font-weight-bold pb-2">
              <!-- TESTIMONIALS--> {{ $t('message.testimonials.sectionName') }}
            </h1>
            <p class="text-grey font-italic">{{ $t('message.testimonials.title') }} </p>
        </div>
        <div class="testimonials-content mt-12 ">
            <v-container>
                <v-row no-gutters>
                    <v-col v-for="testimonial in testimonialsList " :key="testimonial.id" cols="12" sm="4"
                        class="mb-8">
                        <v-hover v-slot="{ isHovering, props }">
                        <!-- <v-hover v-slot="{ hover }" open-delay="200">  :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }"-->
                            <v-card class="mx-auto pa-4 transition-swing" max-width="344" max-height="500" height="385"
                            v-bind="props"
        :class="`elevation-${isHovering ? 24 : 6}`"
        >

                                <div class="d-flex flex-no-wrap ">
                                    <v-avatar class="ma-3" size="75" rounded="0">
                                        <v-img :src="testimonial.avatar"></v-img>
                                        <!-- {{ testimonial . avatar }} -->
                                    </v-avatar>
                                    <div>
                                        <v-card-title class="text-h6 pt-4">
                                            {{ testimonial . name }}
                                        </v-card-title>

                                        <v-card-subtitle>{{ testimonial . designation }}</v-card-subtitle>
                                    </div>
                                </div>
                                <div>
                                    <v-card-text class="text-left">
                                        <v-icon end icon="mdi-format-quote-open" style="color: pink;" size="28">
                                        </v-icon>
                                        <span class=" font-italic pa-1 text-subtitle-1"
                                            color="#6c757d">
                                            {{ testimonial . lorem }}
                                        </span>


                                        <v-icon end icon="mdi-format-quote-open" style="color: pink; rotate: -180deg;"
                                            size="28" class="ml-0"></v-icon>
                                    </v-card-text>
                                    <!-- <v-card-text> -->

                                        <div class="text-center ">
                                            <v-rating  color="yellow darken-3"
                                                background-color="grey darken-1" empty-icon="$ratingFull"
                                                half-increments hover large  :length="testimonial.rating"></v-rating>
                                        </div>
                                    <!-- </v-card-text> -->

                                </div>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>
<script>
import { usetestimonialsStore } from '@/store/testimonials'
import {mapState} from 'pinia'
import { mapActions } from 'pinia'
    export default {
        // data() {
        //     return {
        //         testimonialList: [],
        //     }
        // },
        computed: {
            ...mapState(usetestimonialsStore, ['testimonialsList', 'getTestimonials'])
        },
        created() {
           // this.LoadTestimonials()
           this.fetchTestimonials()
        },
        methods: {

          ...mapActions(usetestimonialsStore,['fetchTestimonials'])
            // LoadTestimonials() {
            //     this.axios.get('https://testimonialapi.toolcarton.com/api')
            //         .then(response => this.testimonialList = response.data)
            // },
        }
    }
</script>

<style>
    .testimonials {
        background-color: #F8F9FA;
    }

    .testimonials .v-card.on-hover.theme--dark {
        background-color: rgba(#FFF, 0.8)
            /* box-shadow: 5px px 10px 10px   rgba(#FFF, 0.8); */
    }
</style>
