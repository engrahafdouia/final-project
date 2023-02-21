<template>
  <v-app>
    <default-bar />

    <default-view />
    <FooterSection/>
  </v-app>


</template>

<script setup>
  import FooterSection from '@/components/FooterSection.vue';

  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>
