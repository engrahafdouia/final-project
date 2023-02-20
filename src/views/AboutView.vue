<template>
 <HeroSection title="Welcome To Our Studio!" src="/assets/about2.jpg"/>
<AboutSection id="aboutSection"/>
<TeamSection/>
  <TheFooter />
</template>


<script>
  import HeroSection from '@/components/HeroSection.vue';
import TheFooter from '@/components/TheFooter.vue';
import AboutSection from '@/components/AboutSection.vue';
import TeamSection from '@/components/TeamSection.vue';

  export default {
      components: {
    // TheNavbar,
    TheFooter,
    HeroSection,
    AboutSection,
    TeamSection
},

      data: () => ({
        title:'',
        bgHeroImage:'',
      }),
  }
</script>
