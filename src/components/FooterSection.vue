<template>
  <v-main>
    <v-divider></v-divider>
    <section class="bg-darkme pt-7">
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <h3 class="text-h7">{{ $t("message.CATEGORIES") }}</h3>
            <v-list-item>{{ $t("message.smartphones") }}</v-list-item>
            <v-list-item>{{ $t("message.laptops") }}</v-list-item>
            <v-list-item>{{ $t("message.home-decoration")   }} </v-list-item>
            <v-list-item>{{ $t("message.skincare") }}</v-list-item>
            <v-list-item>{{ $t("message.groceries") }}</v-list-item>

          </v-col>
          <v-col cols="12" md="3">
            <h3 class="text-h7">{{ $t("message.help") }}</h3>
            <v-list-item>{{ $t("message.Track Order") }} </v-list-item>
            <!-- <v-list-item>{{ $t("message.Returns") }} </v-list-item> -->
            <v-list-item>{{ $t("message.Shipping") }}</v-list-item>
            <v-list-item> {{ $t("message.FAQs") }}</v-list-item>
          </v-col>
          <v-col cols="12" md="3">
            <h3 class="text-h7">{{ $t("message.GET IN TOUCH") }}</h3>
            <v-list-item class="font-weight-thin ma-2"
              >{{ $t("message.bodyTouch") }}
            </v-list-item>
          </v-col>
          <v-col cols="12" md="3">
            <h3 class="text-h7">{{ $t("message.NEWSLETTER") }}</h3>
            <v-text-field

        color="indigo"
        placeholder="example@gmail.com"
        variant="underlined"
      ></v-text-field>
          <v-btn   rounded="pill" block color="purpleme">{{ $t("message.SUBSCRIBE") }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <v-footer class="text-center bg-darkme pt-7">
      <!-- <v-divider block></v-divider> -->

      <v-row>
        <v-col class="text-center d-flex flex-column">
          <v-card-action>
            <v-btn
              pills icon
              variant="text"
              href="https://github.com/engrahafdouia/"
              target="_blank"
            >
              <v-icon> mdi-github </v-icon></v-btn
            >
            <v-btn icon
              variant="text"
              href="www.linkedin.com/in/rahaf-douair-5923001bb "
              target="_blank"
            >
              <v-icon> mdi-linkedin </v-icon></v-btn
            >
          </v-card-action>

          <div class="text-center">
            {{ new Date().getFullYear() }} —
            <strong
              >{{ $t("message.Design By") }}
              <!-- <v-btn variant="text" to="/about" class=" d-flex flex-row"
                ></v-btn
              > -->

              <router-link to="/about" color="indigo">{{ $t("message.RAHAF DOUAIR") }}</router-link>
            </strong>
          </div>
        </v-col>
      </v-row>
      <!--
  <div >
    <v-row  class=" pt-4 text-center d-flex flex-column">

            <v-list-item href="https://github.com/engrahafdouia/" target="_blank">   <v-icon>
                mdi-github
              </v-icon></v-list-item>
              <v-list-item href="www.linkedin.com/in/rahaf-douair-
    5923001bb " target="_blank">   <v-icon>
                mdi-linkedin
              </v-icon></v-list-item>
    </v-row>



  </div> -->

      <!--

    <div>
      {{ new Date().getFullYear() }} — <strong class="mt-8 ">Design By <v-list-item to="/about" class="d-flex flex-column" >Rahaf Douiar</v-list-item> </strong>
    </div> -->
      <!-- <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong><RouterLink to="/about">Vuetify</RouterLink></strong>
      </v-card-text> -->
    </v-footer>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
