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
  <v-navigation-drawer v-model="drawer" temporary width="250" height="100vh">
    <v-list nav dense>
      <!-- <v-btn icon @click.native="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn> -->
      <v-list-item  class="bg-purpleme"
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        v-if="isLoggedIn"
        nav
      >
      <v-btn rounded variant="text" to="/profile" v-if="isLoggedIn">
        {{ user.firstName }}


                </v-btn>

                <!-- <v-btn rounded variant="text" to="/admin">
                  {{ $t("message.Admin") }}
                </v-btn> -->
                <v-btn v-if="user.username === 'kminchelle'" rounded variant="text" to="/admin">Dashboard  </v-btn>

                <v-divider class="my-3"></v-divider>

        <!-- <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template> -->
      </v-list-item>
      <v-list-item to="/" class="myicon"
        ><v-icon>mdi-home</v-icon> {{ $t("message.Home") }}</v-list-item
      >
      <v-list-item to="/about" class="myicon">
        <v-icon>mdi-earth</v-icon> {{ $t("message.About") }}</v-list-item
      >
      <v-list-item to="/products" class="myicon"
        ><v-icon>mdi-database</v-icon> {{ $t("message.Products") }}</v-list-item
      >
      <v-list-item to="/contact" class="myicon">
        <v-icon>mdi-phone</v-icon> {{ $t("message.Contact") }}</v-list-item
      >
      <!-- <v-list-item  class="myicon"> <v-icon >mdi-earth</v-icon> Settings</v-list-item> -->
      <v-list-group value="Actions">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-earth">{{
            $t("message.settings")
          }}</v-list-item>
        </template>

        <v-list-item @click="toggleLocale">
          {{ $i18n.locale === "en" ? "English" : "Arabic" }}
        </v-list-item>
      </v-list-group>
      <v-list-item to="/cart">
        <v-icon>mdi-cart</v-icon>{{ $t("message.Cart") }}
      </v-list-item>
      <v-list-item>
        <!-- <v-btn class="login">login</v-btn> -->

        <!-- <v-btn rounded="pill" class="bg-purpleme text-right" to="/login">
          {{ $t("message.Login") }}<v-icon>mdi-account</v-icon>
        </v-btn> -->
        <v-btn
        rounded="pill" class="bg-purpleme "
                  variant="text"
                  v-if="isLoggedIn"
                  to="/"
                  @click="logout"
                >
                  {{ $t("message.logout") }}
                </v-btn>
                <v-btn  rounded="pill" class="bg-purpleme text-right" v-else variant="text" to="/login">
                  {{ $t("message.Login") }}
                </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script >
import { useTheme } from "vuetify";
import { mapState } from "pinia";
import { mapActions } from "pinia";
import { useCartStore } from "@/store/Cart";
import { useUserStore } from "@/store/User";
export default{
  components:{

  },
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
  data() {
    return {
      expand: false,
      expand2: false,
      index: 0,
      image: null,
      images: [
        {
          id: 1,
          src: "../../../public/img/logo_black.svg",
          alt: "Natural Grove Green Trees Path",
        },
        {
          id: 2,
          src: "../../../public/img/Logo White-p-500.png",
          alt: "stockafbeelding cascades in nationaal park plitvice",
        },
      ],

      categories: ["profile", "logout"],
      drawer: false,
      dialog: false,
      tab: null,
      // items: ["Home", "About", "Products", "Contact us"],
      rail: true,
      // items: [
      //   { title: 'Click Me1' },
      //   { title: 'Click Me2' },
      //   { title: 'Click Me3' },
      //   { title: 'Click Me4' },
      // ],
      cruds: [
        ["Arabic", "mdi-plus-outline"],
        ["English", "mdi-alpha-e"],
      ],
    };
  },
  mounted() {
    this.switchImage();
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

    switchImage() {
      this.image = this.images[this.index];
      this.index = (this.index + 1) % this.images.length;
    },
  },
}
  //
</script>
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
