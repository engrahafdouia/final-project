<template>

<AboutSection id="aboutSection"/>

<TeamSection/>
 <TimelineSection/>
 <v-divider></v-divider>



<StudentInfo/>
<TechnologiesSection/>
<OurTeamSection/>
</template>


<script>
import StudentInfo from '@/components/StudentInfo.vue';
import AboutSection from '@/components/AboutSection.vue';
import TeamSection from '@/components/TeamSection.vue';
import TechnologiesSection from '@/components/TechnologiesSection.vue';
import TimelineSection from '@/components/TimelineSection.vue';

  export default {
      components: {
    // TheNavbar,
    AboutSection,
    TeamSection,
    TimelineSection,
    TechnologiesSection,
    StudentInfo
},

      data: () => ({
        title:'',
        bgHeroImage:'',
      }),
  }
</script>
