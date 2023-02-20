<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <!-- <v-flex xs12> -->
          <v-card height="400" color="transparent" flat align="center" class="mt-8">
            <div class="text-center">404 Page not found.</div>
            <div class="paragraph-text mt-2">
              <br />
              <br />Try going back to home page and repeating your action. Or,
              contact helpdesk for support.
              <v-btn color="primary" href="/"> Back to Home</v-btn>
            </div>
          </v-card>
        <!-- </v-flex> -->
      </v-layout>
    </v-container>
  </div>
</template>

<style>
  .paragraph-text {
    font-size: 18px;
  }
</style>
