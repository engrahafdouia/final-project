<template>

  <section>
    <v-container>
      <v-row

      >
        <v-col
          cols="12"
          lg="4"
        >

           <v-img src="/assets/undraw_sign_.svg"  class="py-6"></v-img>

        </v-col>
        <v-col
          cols="12"
          lg="5"
        >
          <v-card>
            <v-card-title>Login</v-card-title>
            <v-form @submit.prevent="submit">
              <v-card-text>
                <v-text-field class="px-6" clearable  variant="underlined" color="indigo" v-model="username" />
                <v-text-field
                  v-model="password" class="px-6"
                  type="password" clearable  variant="underlined" color="indigo"
                />
                <!-- <v-btn
                  type="submit" class="px-6"
                  rounded="pill"  color="purpleme"
                >
                  Login
                </v-btn> -->
                <v-btn
                  type="submit" class="px-6" to="/profile"
                  rounded="pill"  color="purpleme"
                >
                  Login
                </v-btn>
                <!-- <v-btn color="primary"  type="submit" class="mr-4 w-100" to="/">
                USER
              </v-btn>
              <v-btn color="primary"   type="submit" class="mr-4 w-100" to="/chartView">
                ADMIN
              </v-btn> -->
              <!-- <v-btn color="primary"   type="submit" class="mr-4 w-100" to="/chartView">
                ADMIN
              </v-btn> -->
              </v-card-text>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import { mapActions } from "pinia";
import { useUserStore } from "@/store/User";
export default {
  components: {

  },
  data() {
    return {
      username: "kminchelle",
      password: "0lelplR",
    };
  },
  methods: {
    submit() {
      this.login(this.username, this.password);
    },
    ...mapActions(useUserStore, ["login"]),
  },
};
</script>
<style>
.login {
  background-color: #f8f9fa;
}
</style>
