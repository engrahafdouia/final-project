<template>
  <v-container style="height: 400px;">
    <v-row
      class="fill-height"
      align-content="center"
      justify="center"
    >
      <v-col
        class="text-subtitle-1 text-center"
        cols="12"
      >
        ............Loading
      </v-col>
      <v-col cols="6" class="text-center">
        <v-progress-circular indeterminate :size="60"></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
}
</script>

<style scoped>
/* .v-progress-circular {
  margin: 1rem;
} */
</style>
