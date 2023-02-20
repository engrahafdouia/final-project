<template>
 <HeroSection title="Welcome To Our Studio!" >
 </HeroSection>
 <MostSection/>
<ServiceSection/>


<TeamSection/>
<SponserSection/>
<TestimonialsSection />
<FeaturesSection/>
<ContactSection/>
  <FooterSection/>
</template>
<script>
  import HeroSection from '@/components/HeroSection.vue';
import ServiceSection from '@/components/ServiceSection.vue';


import TeamSection from '@/components/TeamSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
import SponserSection from '@/components/SponserSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FeaturesSection from '@/components/FeaturesSection.vue';
import FooterSection from '@/components/FooterSection.vue';

  export default {
      components: {

    HeroSection,
    ServiceSection,


    TeamSection,
    TestimonialsSection,
    SponserSection,
    ContactSection,
    FeaturesSection,
    FooterSection
},
      data(){
        return{
          title:'',
        }
      }
    }


</script>

