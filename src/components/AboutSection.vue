<template>
  <v-carousel hide-delimiters cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h2 font-weight-bold  m-4 bg-apple" >


          <span class="typewrite" data-period="2000" data-type='[ "On Clothes", "On Shoses", "On Accessireos" ]'>
      <span class="wrap"></span>
    </span>
          <h1  class="text-h2 subheading font-weight-bold ma-4 ">
            {{ $t("message.Welcome") }}
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

    </v-carousel-item>

  </v-carousel>


</template>

<script>



// import TimelineSection from './TimelineSection.vue';
// import StudentInfo from './StudentInfo.vue';
// import TechnologiesSection from './TechnologiesSection.vue';



  export default {
  //  ?components: { TimelineSection ,StudentInfo , TechnologiesSection },
    data() {
        return {
            items: [
              {
                    src: "../../public/img/trendy-beautiful-young-asian-woman-carrying-colorful-bags-shopping-online-mobile-phone-isolated-purple-banner-background-184325828.jpg",
                },
                {
                    src: "../../public/img/slide_03.jpg",
                },
                // {
                //     src: "../../public/img/slide_02.jpg",
                // },

            ],
        };
    },

}
</script>
