<template>
  <section class="contact text-center pt-16 pb-16">
      <div class="contact-title pt-6">
          <h1 class="text-h4 font-weight-bold pb-2 text-white text-uppercase">
            <!-- CONTACT US  --> {{ $t('message.contact.sectionName') }}
          </h1>
          <p class="text-grey font-italic">{{ $t('message.contact.title') }}</p>
      </div>
      <div class="contact-content mt-12 ">
          <v-container>
              <v-row no-gutters>
                  <v-col cols="6" class="ma-auto">
                      <v-form ref="form" id="form">
                          <v-text-field v-model="name" :counter="10" :rules="nameRules"
                              label="Your Name" required bg-color="#F8F9FA" color="#ffc800"></v-text-field>

                          <v-text-field v-model="email" :rules="emailRules" label="Your Email" required bg-color="#F8F9FA" color="#ffc800">
                          </v-text-field>
                          <v-text-field v-model="phone" :counter="12" :rules="phoneRules"
                              label="Your Phone" required bg-color="#F8F9FA" color="#ffc800">
                          </v-text-field>
                          <v-textarea solo name="input-7-4" label="" placeholder="Your Message" bg-color="#F8F9FA" color="#ffc800"></v-textarea>

                          <v-btn color="orange darken-2" elevation="2" class="mt-12 pa-4 h-75" width="224">
                              <span class="text-white text-uppercase text-h6">send message</span>
                          </v-btn>
                      </v-form>
                  </v-col>
              </v-row>
          </v-container>
      </div>
  </section>

</template>
<script>
export default{
data(){
  return{
    valid: false,
          name: '',
          nameRules: [
              v => !!v || 'Name is required',
              v => v.length <= 10 || 'Name must be less than 10 characters',
          ],
          phone: '',
          phoneRules: [
              v => !!v || 'Name is required',
              v => v.length <= 12 || 'Name must be less than 10 characters',
          ],
          email: '',
          emailRules: [
              v => !!v || 'E-mail is required',
              v => /.+@.+/.test(v) || 'E-mail must be valid',
          ],
  }
}
}
</script>
<style>
.contact {
      background-image: url(../assets/map-image.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-color: black;
  }

</style>
