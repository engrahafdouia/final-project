<template>
  <v-parallax
  src="/assets/images/hero.png" covered
  >

<div class="overlay">

      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h2 font-weight-bold  m-4 " >


          <span class="typewrite" data-period="2000" data-type='[ "On Clothes", "On Shoses", "On Accessireos" ]'>
      <span class="wrap"></span>
    </span>
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


<!-- <section class="bg-deep-purple-lighten-1">
  <v-container>
    <v-row>
    <v-col cols="12" lg="5" justify="center">
      <h1
  class="text-h3 font-weight-bold  mt-10 blue " >

hello<span   color="deep-purple accent-4">Shopping store</span>

    </h1>

    <h2 class="text-h6   mt-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</h2>
    <v-hover >
          <template  v-slot:default="{ isHovering, props }">
        <v-btn  v-bind="props"
        :color="isHovering ? 'myblue' : 'undefined'"
            title="Shop Now "  class="mt-4">shop now  </v-btn>
      </template>
      </v-hover>

  </v-col>
  <v-col cols="12" lg="5" class=" mt-10">
  <v-img src="../assets/pct.png" covered></v-img>
  .</v-col>

    </v-row>
  </v-container>
 </section> -->
<!-- <div class="overlay">

      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h2 font-weight-bold  mb-4 bg-apple" >
          Welcome

          <span class="typewrite" data-period="2000" data-type='[ "On Clothes", "On Shoses", "On Accessireos" ]'>
      <span class="wrap"></span>
    </span>
          <h1>

  </h1>
        </h1>
        <h3 class="text-h4 subheading font-weight-thin  " color="primary" >
          Accidental appearances
        </h3>
        <v-hover >
          <template  v-slot:default="{ isHovering, props }">
        <v-btn  v-bind="props"
        :color="isHovering ? 'yellow' : 'myblue'"
            title="Shop Now "  class="mt-4">jhhhh </v-btn>
      </template>
      </v-hover>

      </div>
</div> -->






 <!-- <v-carousel cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"

    ></v-carousel-item>
  </v-carousel> -->
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src:'/public/img/pct.png',          },
          {
            src:'/public/img/about.jpg',
          },




        ],
      }
    },
  }
</script>
