<template>
<v-container  theme="dark">
  <h2 class="text-h4 text-center pt-5 font-weight-bold ">{{ $t('message.Timline Course') }} </h2>
<!--
    <v-timeline align="start">
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :dot-color="year.color"
        size="small"
      >
        <template v-slot:opposite>
          <div
            :class="`pt-1 headline font-weight-bold text-${year.color}`"
            v-text="year.year"
          ></div>
        </template>
        <div>
          <h3 :class="`mt-n1 headline font-weight-light mb-4  text-${year.color}`">
            Lorem ipsum
          </h3>
          <div>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </div>
        </div>
      </v-timeline-item>
    </v-timeline> -->


    <!-- <v-timeline class="mt-5 timeline" align="start">
      <v-timeline-item>

        <div>
          <div class="text-h6">Basic-Level-Frontend</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-timeline-item>
      <v-timeline-item>

        <v-col>
          <div class="text-h6">FrontendWithcss-FrameWork</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </v-col>
      </v-timeline-item>
      <v-timeline-item>

        <div>
          <div class="text-h6">advance-Level-Frontend</div>
                    <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-timeline-item>
    </v-timeline> -->

  <v-timeline side="end" data-aos="zoom-in">
    <v-timeline-item
      v-for="item in items"
      :key="item.id"
      :dot-color="item.color"
      size="small"

    >
      <v-alert data-aos="zoom-in"
        :value="true"
        :color="item.color"
        :icon="item.icon"
        :title="item.title"

        :langugue="item.langugue"
      >
      <v-title-card>projects:{{ item.project }}</v-title-card>
<v-title-card>langugue{{ item.langugue }}</v-title-card>
      </v-alert>
    </v-timeline-item>
  </v-timeline>

</v-container>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          id: 1,
          title:'frontend basic level-1',
         color:'indigo-lighten-2',
         icon:"mdi-home",

          langugue:'used langugue:HTML - CSS3-CSS3-ANIMATION - BULMA-VUEJS -VUETIFY -Javascript',
          project:'SEO-project ,Fresh-Project-Krypton-project-ecommerce-project'
        },
        {
          id: 2,
          title:'frontend basic level-2',
          icon: 'mdi-database',
          langugue:'used langugue:HTML - CSS3-CSS3-ANIMATION - BULMA-VUEJS -VUETIFY -Javascript',
          project:'SEO-project ,Fresh-Project-Krypton-project-ecommerce-project'
        },
        {
          id:3,
          color:'indigo-lighten-2',
          icon: 'mdi-cart',
          title:'frontend Advance',
          langugue:'used langugue:HTML - CSS3-CSS3-ANIMATION - BULMA-VUEJS -VUETIFY -Javascript',
          project:'SEO-project ,Fresh-Project-Krypton-project-ecommerce-project'
        },

      ],
    }),
  }
</script>
<style>
/* .timeline{
  background-image: url('../assets/map-bg.webp');
} */

</style>
