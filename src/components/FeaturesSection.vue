<template>
    <section class="features text-center pt-16 pb-16" >
        <div class="features-title pt-6">
            <h1 class="text-h4 font-weight-bold pb-2 text-uppercase">
              <!-- Features --> {{ $t('message.features.sectionName') }}
            </h1>
            <p class="text-grey font-italic">{{ $t('message.features.title') }}</p>
        </div>
        <div class="features-content mt-12 ">
            <v-container>
                <v-row no-gutters>
                    <v-col v-for="feat in featureList " :key="feat.id" cols="12" sm="4" class="mb-8">
                      <v-hover>
                    <template v-slot:default="{ isHovering, props }" >
                            <v-card class="mx-auto pa-4" max-width="344" max-height="500" height="250"
                            v-bind="props"  :color="isHovering ? 'success' : undefined" color="#F8F9FA" >
                                <v-icon  size="40" class="text-yellow-darken-2 pt-8 pb-4 material-icons" :icon=" feat . icon"/>
                                <v-card-title class=" subheading pa-4 font-weight-bold">
                                        {{ feat . name }}
                                </v-card-title>
                                <v-card-text>
                                  <span class="text-medium-emphasis " >
                                            {{ feat . lorem }}
                                        </span>
                                    </v-card-text>
                            </v-card>
                        <!-- </v-hover> -->

                  </template>
                  </v-hover>
                </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                featureList: [{
                        icon: 'mdi-diamond',
                        name: 'Web Design',
                        lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas. '
                    },
                    {
                        icon: 'mdi-api',
                        name: 'Development',
                        lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas.'
                    },
                    {
                        icon: 'mdi-cart',
                        name: 'Shopping Cart',
                        lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas.'
                    },
                    {
                        icon: 'mdi-shopping',
                        name: 'Markeing',
                        lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas.'
                    },
                    {
                        icon: 'mdi-store',
                        name: 'Store',
                        lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas.'
                    },
                    {
                        icon: 'mdi-filter',
                        name: 'Filltering',
                        lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit aut nemo officiis autem quas.'
                    },
                ],
            }
        }
    }
</script>

