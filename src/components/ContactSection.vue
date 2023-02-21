<template>
  <v-parallax
  src="/assets/gi.png" covered
  >

<div class="overlay">

      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h2 font-weight-bold  m-4 " >


          <!-- <span class="typewrite" data-period="2000" data-type='[ "On Clothes", "On Shoses", "On Accessireos" ]'> -->
      <!-- <span class="wrap"></span>
    </span> -->
          <h1  class="text-h2 subheading center-text font-weight-bold ma-4 " data-aos="zoom-in">
            {{ $t("message.Welcome") }}

<!-- <typical
  :steps="['Hello', 1000, 'Hello world!', 500]"
  :wrapper="'h2'"
></typical>
<typical
  class="typicalWrapper"
  :steps="['Fucking', 1000, 'Fucking Awesome!', 500, 'Fucking Awesome! Aha :-) 👋', 1000]"
  :loop="Infinity"
  :wrapper="'h3'"
></typical> -->
<!--  -->
  </h1>
        </h1>
        <h3 class="text-h6 subheading font-weight-thin  " color="primary" >
          {{ $t("message.Accidental appearances") }}
        </h3>
        <v-hover >
          <template  v-slot:default="{ isHovering, props }">
        <v-btn  v-bind="props"
        :color="isHovering ? 'greenlight' : 'purpleme'"
            title="Shop Now "  class="my-4" rounded="pill">{{ $t("message.shop now") }}  </v-btn>
      </template>
      </v-hover>
      <!-- <v-btn class="my-5">Shop Now</v-btn> -->
      </div>
</div>

  </v-parallax>
  <section class="section-header  pt-16 cont bg-indigo-lighten-6">
    <h2 class="text-h4 text-center font-weight-bold ">Contact Us</h2>

    <h3 class="text-h6 pt-6 text-center font-weight-bold">
            Please get in touch and our expert support team will answer all your
            questions.
          </h3>
    <v-container class="ma-auto">
      <v-row>
        <v-col cols="12" md="6">

          <v-card class="px-4 mx-3" max-width="600">
            <v-card-text>
              <v-form ref="loginForm"  lazy-validation>
                <v-row>
                  <v-col cols="12" >
                    <v-text-field

            label="Name"
            clearable  variant="underlined" color="indigo"
          ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field pills

                    variant="underlined"
                      label="E-mail" color="indigo"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                    variant="underlined" color="indigo"

                      label="Subject"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field

                    variant="underlined" color="indigo"

                      label="Message"
                      required
                    ></v-text-field>

                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                    <v-btn x-large block  color="indigo">
                Contact
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>

        </v-col>
        <v-col cols="12" md="6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.692352316934!2d36.296115122053315!3d33.50938048085129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e1fa18b952b7%3A0xdd0332d43b2c6e3c!2z2KzZhdi52YrYqSDYp9mE2KjYsdmD2Kkg2YTZhNiq2YbZhdmK2Kkg2KfZhNil2KzYqtmF2KfYudmK2Kk!5e0!3m2!1sar!2s!4v1676934456045!5m2!1sar!2s" width="300" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>          <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.692352316933!2d36.29611512166183!3d33.50938048085131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e1fa18b952b7%3A0xdd0332d43b2c6e3c!2z2KzZhdi52YrYqSDYp9mE2KjYsdmD2Kkg2YTZhNiq2YbZhdmK2Kkg2KfZhNil2KzYqtmF2KfYudmK2Kk!5e0!3m2!1sar!2s!4v1676148887397!5m2!1sar!2s" width="400" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
<!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.692351580783!2d36.298051673046885!3d33.509380500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e1fa18b952b7%3A0xdd0332d43b2c6e3c!2z2KzZhdi52YrYqSDYp9mE2KjYsdmD2Kkg2YTZhNiq2YbZhdmK2Kkg2KfZhNil2KzYqtmF2KfYudmK2Kk!5e0!3m2!1sar!2s!4v1675978169049!5m2!1sar!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
        <!-- <iframe
            class="text-right mt-2 ml-1"
            frameborder="0"
            width="600" height="450"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.3251693614684!2d36.29446617404161!3d33.50943756904865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e1fa18b952b7%3A0xdd0332d43b2c6e3c!2z2KzZhdi52YrYqSDYp9mE2KjYsdmD2Kkg2YTZhNiq2YbZhdmK2Kkg2KfZhNil2KzYqtmF2KfYudmK2Kk!5e0!3m2!1sar!2s!4v1674469667391!5m2!1sar!2s"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> -->
          </v-col>
        <!-- <v-col cols="12" md="3"> -->
          <!--
            width="600" height="450"

             <iframe width="50%"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.3251693614684!2d36.29446617404161!3d33.50943756904865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e1fa18b952b7%3A0xdd0332d43b2c6e3c!2z2KzZhdi52YrYqSDYp9mE2KjYsdmD2Kkg2YTZhNiq2YbZhdmK2Kkg2KfZhNil2KzYqtmF2KfYudmK2Kk!5e0!3m2!1sar!2s!4v1674469667391!5m2!1sar!2s"
    frameborder="0" allowfullscreen="" style="position:absolute; top:0; left: 0">
  </iframe> -->

          <!-- <iframe
            class="text-right"
            frameborder="0"
            width="350"
            height="390"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.3251693614684!2d36.29446617404161!3d33.50943756904865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e1fa18b952b7%3A0xdd0332d43b2c6e3c!2z2KzZhdi52YrYqSDYp9mE2KjYsdmD2Kkg2YTZhNiq2YbZhdmK2Kkg2KfZhNil2KzYqtmF2KfYudmK2Kk!5e0!3m2!1sar!2s!4v1674469667391!5m2!1sar!2s"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> -->
        <!-- </v-col> -->
      </v-row>
      <v-row>
            <v-col cols="12" md="4">
              <v-card data-aos="flip-left">
                <v-avatar class="ma-1" size="80" rounded="0">
                  <v-icon class="icon-cont">mdi-phone</v-icon> </v-avatar
                ><span class="font-weight-bold">Phone:</span>+9634444444
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card data-aos="flip-left">
                <v-avatar class="ma-1" size="80" rounded="0">
                  <v-icon class="icon-cont">mdi-map</v-icon> </v-avatar
                ><span class="font-weight-bold">Address:</span>Syria-Damascus
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card data-aos="flip-left">
                <v-avatar class="ma-1" size="80" rounded="0">
                  <v-icon class="icon-cont">mdi-email</v-icon> </v-avatar
                ><span class="font-weight-bold block">Email:</span>
                rahafdoui@gmail.com
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card data-aos="flip-left">
                <v-avatar class="ma-1" size="80" rounded="0">
                  <v-icon class="icon-cont">mdi-account</v-icon> </v-avatar
                ><span class="font-weight-bold">Name:</span>RahafDouiar
              </v-card>
            </v-col>
          </v-row>
      <!--  -->
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: "mdi-home",
        title: "Web design",
        text: `It's New Release Friday`,
        subtext: "Newly released songs. Updated daily.",
        // img: '../../public/img/pct.png',
      },
      {
        icon: "mdi-home",
        title: "Web design",
        text: `It's New Release Friday`,
        subtext: "Newly released songs. Updated daily.",
        // img: '../../public/img/pct.png',
      },
      {
        icon: "mdi-draw",
        title: "Web Developement",
        text: "Greatest Rock Hits",
        subtext: "Lose yourself in rock tunes.",
        // img: '../../public/img/pexels-andrea-piacquadio-974911.jpg',
      },
      {
        icon: "mdi-database",
        title: "Problem solving",
        text: "Ambient Bass",
        subtext: "Chill beats to mellow you out.",
        // img: '../../public/img/pexels-andrea-piacquadio-974911.jpg',
      },
    ],
  }),
};
</script>

<style>
.icon-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  font-size: 24px;
  line-height: 0;

  color: #fff;
  background: #2333b0;
  border-radius: 50%;
  margin-right: 15px;
}
.cont{
  background-image: url('../assets/map-bg.webp');
  background-size: cover;
}
</style>
