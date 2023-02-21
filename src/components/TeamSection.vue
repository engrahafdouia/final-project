<template>
  <section class="sect">
    <v-container>
      <h2 class="text-h4 text-center font-weight-bold mb-8">{{ $t('message.Our Teams') }}</h2>

    <v-row>
    <v-col cols="12" md="3" class="mx-auto">
    <v-hover v-slot="{ isHovering, props }">
        <v-card
          class="mx-auto bg-indigo-lighten-5"
          max-width="244"
          v-bind="props"
        >
          <v-img src="/assets/images/team/testimonial-2.jpg"  height="250"></v-img>
          <v-card-text>
            <h2 class="text-h6 text-primary">
             Rahaf Douair
            </h2>
    Junior Frontend developer
          </v-card-text>
          <v-card-title>
            <!-- <v-rating
              :model-value="4"
              dense
              color="orange"
              background-color="orange"
              hover
              class="me-2"
            ></v-rating>
            <span class="text-primary text-subtitle-2">64 Reviews</span> -->
          </v-card-title>
          <v-overlay
            :model-value="isHovering"
            contained
            class="align-center justify-center"
          >
          <v-btn  href="https://github.com/engrahafdouia/"
              target="_blank" >
            <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn               href="www.linkedin.com/in/rahaf-douair-5923001bb "
              target="_blank" >
            <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </v-overlay>
        </v-card>
      </v-hover>

    </v-col>
    <v-col cols="12" md="3" class="mx-auto">
    <v-hover v-slot="{ isHovering, props }">
        <v-card
          class="mx-auto bg-indigo-lighten-5"
          max-width="244"
          v-bind="props"
        >
          <v-img src="/assets/images/team/tasssir.jpg" width="244"></v-img>
          <v-card-text>
            <h2 class="text-h6 text-primary">
            Tassier Al madani
            </h2>
    Coach & web developer
          </v-card-text>
          <v-card-title>
            <!-- <v-rating
              :model-value="4"
              dense
              color="orange"
              background-color="orange"
              hover
              class="me-2"
            ></v-rating>
            <span class="text-primary text-subtitle-2">64 Reviews</span> -->
          </v-card-title>
            <v-overlay
            :model-value="isHovering"
            contained
            class="align-center justify-center"
          >
            <v-btn >
            <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn >
            <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </v-overlay>
        </v-card>
      </v-hover>

    </v-col>
    <v-col cols="12" md="3" class="mx-auto">
    <v-hover v-slot="{ isHovering, props }">
        <v-card
          class="mx-auto bg-indigo-lighten-5"
          max-width="244"
          v-bind="props"
        >
          <v-img src="/assets/images/team/rodaun.jpg" width="244" ></v-img>
          <v-card-text>
            <h2 class="text-h6 text-primary">
         Raduon Abd Alkareem
            </h2>
    Coach & Fullstack developer
          </v-card-text>
          <v-card-title>
            <!-- <v-rating
              :model-value="4"
              dense
              color="orange"
              background-color="orange"
              hover
              class="me-2"
            ></v-rating> -->
            <!-- <span class="text-primary text-subtitle-2">64 Reviews</span> -->
          </v-card-title>
          <v-overlay
            :model-value="isHovering"
            contained
            class="align-center justify-center"
          >
            <v-btn  href="http://github.com/RoduanKD"
              target="_blank" >
            <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn               href="www.linkedin.com/in/rahaf-douair-5923001bb "
              target="_blank" >
            <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </v-overlay>
        </v-card>
      </v-hover>

    </v-col>
    </v-row>
    <!-- <v-row><v-col v-for="i in 4" :key="i">
    <v-card

    max-width="344"
    color="grey-lighten-4"

    >
    <v-img
    src="../assets/Rphoto_٢٠٢٢-٠١-١٠_١٦-٢٥-١٤.jpg" width="344"
    height="200px"
    ></v-img>
    <v-card-title>
    Raduan bd kareem
    </v-card-title>
    <v-card-subtitle>
    position:expert coach
    </v-card-subtitle>
    <v-card-text>backend % frontend</v-card-text>

    <v-card-actions>
    <v-btn
    class="bg-shoco"
      color="blue lighten-2"
      text
    >
     contact
    </v-btn>
    <v-spacer></v-spacer>
    </v-card-actions>
    </v-card>
    </v-col></v-row> -->
    </v-container>
  </section>

  <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi molestiae numquam dolore temporibus, perspiciatis deserunt veritatis quis consequuntur quidem iste rerum itaque, minima vitae asperiores quo, ex reiciendis reprehenderit voluptatem. -->
</template>

<script>
export default {


}

</script>
<style>
 .sect{
    background-color: #5671891f;

  }
</style>
