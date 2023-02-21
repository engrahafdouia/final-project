<template>
 <HeroSection title="Welcome To Our Studio!" >
 </HeroSection>
 <MostSection/>



<!-- <TeamSection/> -->
<SwiperSection/>
<TesSection/>
<AccordionSection/>

</template>
<script>
  import HeroSection from '@/components/HeroSection.vue';
import MostSection from '@/components/MostSection.vue';
import AccordionSection from '@/components/AccordionSection.vue';
import TesSection from '@/components/TesSection.vue';
import SwiperSection  from '@/components/SwiperSection.vue';


import FooterSection from '@/components/FooterSection.vue';

  export default {
      components: {

    HeroSection,
    MostSection,

    SwiperSection,

    TesSection,
    AccordionSection,

    FooterSection
},
      data(){
        return{
          title:'',
        }
      }
    }


</script>

