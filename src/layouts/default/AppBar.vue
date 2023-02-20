<template>
<v-app-bar app>
    <!-- #6C4AB6   color="indigo"-->
    <!-- 495C83 -->
    <v-app-bar-nav-icon
      @click="drawer = true"
      class="d-flex d-sm-none"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>
      <!-- <v-img src="@/assets/logo.png.webp" width="100px"/> -->
      <!-- <v-img src="@/assets/63bc5caa2a4485a618a57ba4_Logo White-p-500.png" width="190px" /> -->
      <!-- <v-img src="@/assets/logo-mjED7vRvLRu2w7eE.svg" width="100px" /> -->
      <!-- <v-img
        src="@/assets/6398b876090a6e205bc32e21_logo_black.svg"

      /> -->
      <v-img
        width="190px"
        v-if="image"
        :key="image.id"
        class="image"
        :src="image.src"
        alt="image.alt"
      />
      <!-- <v-img src="@/assets/logo2.jpg" width="190px"/> -->
    </v-toolbar-title>
    <v-tabs v-model="tab" align-with-title class="d-none d-sm-flex">
      <!-- <v-tabs-slider color="yellow"></v-tabs-slider> -->

      <v-tab class="mytab" to="/">{{ $t("message.Home") }}</v-tab>

      <v-tab class="mytab" to="/about">{{ $t("message.About") }}</v-tab>
      <!-- <v-tab class="mytab" to="/contact">        {{ $t("message.Feature") }}</v-tab> -->
      <v-tab class="mytab" to="/products">{{ $t("message.Products") }}</v-tab>
      <v-tab class="mytab" to="/contact"> {{ $t("message.Contact") }}</v-tab>
      <!-- <v-tab class="mytab" to="/admin"> {{ $t("message.Admin") }}</v-tab> -->
      <!-- <v-tab class="mytab" to="/profile" v-if="isLoggedIn">
        {{ user.firstName }} <v-btn icon> </v-btn
      ></v-tab> -->

      <!--
      <v-menu transition="fade-transition" >
      <template v-slot:activator="{ props }">
        <v-tab class="" to="/profile" v-if="isLoggedIn"
          dark

          v-bind="props"
        >
        {{ user.firstName }}
        </v-tab>
      </template>
      <v-list>
        <v-list-item

        > -->
      <!-- <v-list-item-title v-text="'Profile ' " to="/profile" v-if="isLoggedIn">
          </v-list-item-title> -->

      <!-- </v-list-item>
        <v-list-item

        >
          <v-list-item-title >
          <v-icon btn v-if="isLoggedIn" variant="text" stacked to="/" @click="logout" >mdi-account</v-icon>logout</v-list-item-title>

        </v-list-item>

      </v-list>
    </v-menu> -->

      <v-row justify="center">
        <v-menu min-width="200px" rounded>
          <template v-slot:activator="{ props }">
            <v-btn
              rounded
              class="mt-7"
              variant="text"
              prepend-icon="mdi-account"
              v-bind="props"
            >
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <div class="mx-auto text-center">
                <v-icon>mdi-account</v-icon>

                <h3>{{ user.firstName }}</h3>
                <p class="text-caption mt-1">
                  {{ user.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn rounded variant="text" to="/profile" v-if="isLoggedIn">
                  {{ $t("message.profile") }}
                </v-btn>

                <v-divider class="my-3"></v-divider>
                <!-- <v-btn rounded variant="text" to="/admin">
                  {{ $t("message.Admin") }}
                </v-btn> -->
                <v-btn v-if="user.username === 'kminchelle'" rounded variant="text" to="/admin">Dashboard  </v-btn>

                <v-divider class="my-3"></v-divider>

                <v-btn
                  rounded
                  variant="text"
                  v-if="isLoggedIn"
                  to="/"
                  @click="logout"
                >
                  {{ $t("message.logout") }}
                </v-btn>
                <v-btn v-else variant="text" rounded
                 to="/login">
                  {{ $t("message.Login") }}
                </v-btn>
                <v-divider class="my-3"></v-divider>

              </div>
            </v-card-text>
          </v-card>
        </v-menu>
      </v-row>
      <!-- <v-icon>mdi-account</v-icon> -->
      <!-- <v-btn v-if="isLoggedIn" variant="text" stacked to="/" @click="logout">

      </v-btn> -->

      <!-- <v-tab v-if="isLoggedIn" variant="text" >
      <v-menu transition="slide-y-reverse-transition">
        <template v-slot:activator="{ props }">
      <v-btn
         color="purpleme"
        class="ma-2"
        v-bind="props"
      >
      {{ user.firstName }}
      </v-btn>
        </template>
        <v-list>
      <v-list-item
        v-for="n in categories"
        :key="n"
        link
      >
        <v-list-item-title v-text="n"></v-list-item-title>
      </v-list-item>
        </v-list>
      </v-menu>
    </v-tab> -->
      <!-- <v-btn v-if="isLoggedIn" variant="text" to="/profile" stacked>
      {{ user.firstName }}
    </v-btn> -->
      <!-- <v-btn v-if="isLoggedIn" variant="text" stacked to="/" @click="logout">
      Logout
    </v-btn> -->

      <!-- <v-btn v-else variant="text" to="/login" stacked> Login </v-btn> -->
      <v-btn variant="text" stacked @click="toggleLocale">
      <v-icon>{{
        $i18n.locale === "en" ? "mdi-abjad-arabic" : "mdi-alpha-e"
      }}</v-icon>
    </v-btn>
    </v-tabs>
    <v-spacer></v-spacer>
    <!-- <v-btn variant="text" stacked @click="toggleLocale">
      <v-icon>{{
        $i18n.locale === "en" ? "mdi-abjad-arabic" : "mdi-alpha-e"
      }}</v-icon>
    </v-btn> -->

    <v-btn icon to="/cart">
      <v-badge :content="itemsCount" floating color="indigo-lighten-1">
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>
    <v-btn pills variant="text" stacked @click="switchImage">
      <v-icon @click="toggleTheme">mdi-theme-light-dark</v-icon>
    </v-btn>

    <!-- <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn> -->

    <!-- <v-btn icon >

        <v-icon @click="toggleTheme">mdi-weather-night</v-icon>

        </v-btn> -->
    <!-- <v-btn icon to="/cart">
      <v-badge  floating color="indigo-lighten-1">
        <v-icon>mdi-cart</v-icon>
      </v-badge>
        </v-btn>

        <v-btn variant="text" stacked @click="toggleLocale">
      <v-icon>{{
        $i18n.locale === "en" ? "mdi-abjad-arabic" : "mdi-alpha-e"
      }}</v-icon>
    </v-btn>

    <v-btn icon>

      <v-icon>mdi-account</v-icon>

    </v-btn> -->

    <!-- <template v-slot:extension>

        </template> -->
  </v-app-bar>
</template>


<style>
.mytab:hover {
  color: #2333b0;
  border-bottom-color: #2333b0;
  /* border: 9px red; */
}
.myicon:hover {
  color: #2333b0;
  border-bottom-color: #2333b0;
}
.login:hover {
  color: "indigo";
}
</style>
