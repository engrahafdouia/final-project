<template>

  <section class="bg-grey-lighten-4 py-5">
    <h2 class="text-h4 text-center font-weight-bold mt-8">{{ $t("message.portifoil") }}</h2>

    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :autoplay="{
        delay: 2700,
        disableOnInteraction: false,
      }"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        >



      <a href="https://engrahafdouia.github.io/SEOproject/"
              target="_blank">
        <img
              src="/assets/screencapture-127-0-0-1-5502-First-project-final-project-index-html-2022-10-24-12_32_43.png" height="300" width="600" />
      </a>

            </swiper-slide
              >
        <swiper-slide
        ><a     target="_blank" href="https://engrahafdouia.github.io/Bulma-myfresh/"><img
          src="/assets/screencapture-fresh-cssninja-io-2022-10-28-14_44_47.png" height="400" width="700" /></a></swiper-slide
      ><swiper-slide
        ><a href="https://engrahafdouia.github.io/krypton/
"    target="_blank"><img
          src="/assets/img4.png" height="300" width="600" /></a></swiper-slide
      ><swiper-slide
        ><a href=""    target="_blank"><img
          src="/assets/ezgif.com-gif-maker.gif" height="300" width="600" /></a></swiper-slide
      ><swiper-slide
        ><a href=""    target="_blank"><img
          src="/assets/screencapture-127-0-0-1-5504-training-website1-index-html-2022-12-01-21_40_05.png" height="300" width="600" /></a></swiper-slide
      ><swiper-slide
        ><a href=""   target="_blank">
          <img
            src="/assets/screencapture-engrahafdouia-github-io-makeup-float-2022-12-06-01_10_03.png" height="300" width="600" /></a>
      </swiper-slide
      ><swiper-slide
        >
        <a href=""    target="_blank">
          <img
            src="/assets/screencapture-127-0-0-1-5504-training-website-green-index-html-2022-12-01-21_53_58.png" />

        </a>  </swiper-slide
      >
      <swiper-slide
        >
        <a href="https://engrahafdouia.github.io/Earth-Move/
"   target="_blank">
          <img
            src="/assets/ezgif.com-gif-makers.gif" height="300" width="600"/>
        </a>
          </swiper-slide
      >
      <swiper-slide
        ><a href="">
          <img
            src="/assets/img55.png" height="300" width="600"/>
        </a>
        </swiper-slide
      >
      <swiper-slide
        >
        <a >
          <img
            src="/assets/ezgif.com-gif-makerss.gif" height="300" width="600"/>
        </a>
          </swiper-slide
      >

    </swiper>
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide  } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "../assets/main.css";

// import required modules
import { EffectCoverflow, Pagination , Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,

  },
  data() {
        return {
            // items: [
            //     {
            //         src: "../../public/img/pct.png",
            //         alink:"https://aman-najibeh.github.io/Networking-website/"
            //     },
            //     {
            //         src: '../../ourProjectsImg/FreachProject.PNG',
            //         alink:"https://aman-najibeh.github.io/Fresh/",
            //     },
            //     {
            //         src: '../../ourProjectsImg/simpleHomeCV.PNG',
            //         alink:"https://aman-najibeh.github.io/Simple-CV/",
            //     },
            //     {
            //         src: '../../ourProjectsImg/Seo.PNG',
            //         alink:"https://aman-najibeh.github.io/SEO_website/",
            //     },
            //     {
            //         src: '../../ourProjectsImg/flexbox.PNG',
            //         alink:"https://aman-najibeh.github.io/Flex-Box/",
            //     },
            // ],
        }
    },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination , Autoplay],
    };
  },
};
</script>


<style>
 .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top:10px
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 400px;
    height: 300px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }


</style>
