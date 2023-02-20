<template>
  <v-card >
    <v-layout >
      <v-main style="height: 950px;background-color:#CFCFCF;">
      <ApexChartSection />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
import ApexChartSection from '@/components/ApexChartSection.vue';
  export default {
    components: { ApexChartSection }
}
</script>
