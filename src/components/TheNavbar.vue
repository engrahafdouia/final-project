<template>
  <v-app-bar color="#212529">
    <v-app-bar-title id="bar-title" class="font-italic text-h5 pl-6">
      <!-- Start Vuetify -->
      {{ $t("message.navbar.logo") }}
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn
      class="text-uppercase"
      color="white"
      id="btn"
      to="/"
      variant="text"
      exact
    >
      <!-- Home -->
      {{ $t("message.navbar.home") }}
    </v-btn>
    <!--
    <router-link :to="{ name: 'about' }" style="text-decoration: none;"> -->
    <v-btn
      class="text-uppercase"
      color="white"
      id="btn"
      variant="text"
      to="/about"
    >
      <!-- about -->
      {{ $t("message.navbar.about") }}
    </v-btn>
    <!-- </router-link> -->
    <router-link :to="{ name: 'contact' }" style="text-decoration: none">
      <v-btn class="text-uppercase" color="white" id="btn" variant="text">
        <!-- contact -->
        {{ $t("message.navbar.contact") }}
      </v-btn>
    </router-link>
    <router-link :to="{ name: 'products' }" style="text-decoration: none">
      <v-btn class="text-uppercase" color="white" id="btn" variant="text">
        <!-- products -->
        {{ $t("message.navbar.products") }}
      </v-btn>
    </router-link>
    <v-btn
      class="text-uppercase"
      color="white"
      id="btn"
      variant="text"
      to="/profile"
      v-if="isLoggedIn"
    >
      {{ user.firstName }}
      <!-- <v-icon  size="24px" color="primary">mdi-user</v-icon> -->
    </v-btn>
    <v-btn
      class="text-uppercase"
      color="white"
      id="btn"
      variant="text"
      to="/"
      v-if="isLoggedIn"
      @click="logout"
    >
      <!-- logout -->
      {{ $t("message.navbar.logout") }}
    </v-btn>
    <v-btn
      class="text-uppercase"
      color="white"
      id="btn"
      variant="text"
      to="/login"
      v-else
    >
      <!-- login -->
      {{ $t("message.navbar.login") }}
    </v-btn>
    <v-btn
      class="text-uppercase"
      color="white"
      id="btn"
      variant="text"
      to="/dashboard"
    >
      <!-- admin -->
      {{ $t("message.navbar.admin") }}
    </v-btn>
    <v-btn variant="text" to="/cart" stacked>
      <v-badge
        :content="itemsCount"
        floating
        color="red-darken-2 "
        size="small"
        class="text-white"
      >
        <v-icon color="white">mdi-cart</v-icon>
      </v-badge>
    </v-btn>
    <v-btn variant="text" stacked @click="toggleTheme">
      <v-icon color="white">mdi-theme-light-dark</v-icon>
    </v-btn>
    <v-btn variant="text" stacked @click="toggleLocale">
      <v-icon color="white">{{
        $i18n.locale === "en" ? "mdi-abjad-arabic" : "mdi-alpha-e"
      }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { useTheme } from "vuetify";
import { mapState } from "pinia";
import { mapActions } from "pinia";
import { useCartStore } from "@/store/Cart";
import { useUserStore } from "@/store/User";
export default {
  setup() {
    const theme = useTheme();

    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark"),
    };
  },
  computed: {
    ...mapState(useCartStore, ["itemsCount"]),
    ...mapState(useUserStore, ["isLoggedIn", "user"]),
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),
    toggleLocale() {
      this.$i18n.locale = this.$i18n.locale === "ar" ? "en" : "ar";
      this.$vuetify.locale.current =
        this.$vuetify.locale.current === "ar" ? "en" : "ar";
    },
  },
};
</script>

<style>
#bar-title {
  color: #ffc800;
}

#btn:hover {
  color: #ffc800 !important;
}
</style>
