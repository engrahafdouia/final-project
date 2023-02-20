
import TheDrawerNav from '@/components/TheDrawerNav.vue';

<template>
  <v-app>
  <v-main>
    <TheDrawerNav/>
    <router-view />
  </v-main>
</v-app>
</template>
<script>
import TheDrawerNav from '@/components/TheDrawerNav.vue';
export default {

      components:{TheDrawerNav,}

  }


</script>
