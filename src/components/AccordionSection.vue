<template>
  <v-divider></v-divider>
  <section class="">
    <v-container>
      <h2 class="text-h4 text-center font-weight-bold my-5">{{ $t("message.FAQs &Questions") }}</h2>
      <v-row>
        <v-col cols="12" md="6"  >
          <!-- <div class="text-subtitle-2 mt-4 mb-2">Accordion</div> -->
          <v-expansion-panels variant="accordion">
            <v-expansion-panel
            class="bg-indigo-lighten-3"
              title="Create Your Account In Shape
"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            >
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" md="6" >
          <!-- <div class="text-subtitle-2 mt-4 mb-2">Accordion</div> -->
          <v-expansion-panels variant="accordion">
            <v-expansion-panel
            class="bg-indigo-lighten-3"
              title="its easy, simple and just a few clicks job
"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" md="6" >
          <!-- <div class="text-subtitle-2 mt-4 mb-2">Accordion</div> -->
          <v-expansion-panels variant="accordion" class="bg-indigo-lighten-3">
            <v-expansion-panel
            class="bg-indigo-lighten-3"
              title="What our built-in design system?
"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" md="6" >
          <!-- <div class="text-subtitle-2 mt-4 mb-2">Accordion</div> -->
          <v-expansion-panels variant="accordion">
            <v-expansion-panel
            class="bg-indigo-lighten-3"
              title="Create Your Account In Shape
"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" md="6" >
          <!-- <div class="text-subtitle-2 mt-4 mb-2">Accordion</div> -->
          <v-expansion-panels variant="accordion">
            <v-expansion-panel
            class="bg-indigo-lighten-3"
              title="its easy, simple and just a few clicks job
"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" md="6" >
          <!-- <div class="text-subtitle-2 mt-4 mb-2">Accordion</div> -->
          <v-expansion-panels variant="accordion">
            <v-expansion-panel
            class="bg-indigo-lighten-3"
              title="What our built-in design system?
"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
 export default {

    data() {
        return {
            items: [
                {
                    src: "../../public/img/slide_03.jpg",
                },
                {
                    src: "../../public/img/slide_02.jpg",
                },
            ],
        };
    },

}
</script>
