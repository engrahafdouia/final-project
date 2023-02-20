<template>
 <HeroSection title="Welcome To Our Studio!" >
 </HeroSection>
<ServiceSection/>
 <PortfolioSection/>

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
import PortfolioSection from  '@/components/PortfolioSection.vue'

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
    PortfolioSection,

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

