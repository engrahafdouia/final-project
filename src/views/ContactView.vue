<template>
    <HeroSection   src="/assets/images/contacts.jpg"/>
    <section class="location text-center pt-16 pb-16">
        <div class="loction-title pt-6">
            <h1 class="text-h4 font-weight-bold pb-2 text-black">Our Location</h1>
            <p class="text-grey font-italic">Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div class="location-content mt-12 ">
            <v-container>
                <v-row no-gutters justify="center">
                    <v-col cols="12" sm="6" align="center" class="ma-auto">
                        <v-img class="pa-16 ma-auto" src="https://sm.mashable.com/mashable_in/seo/default/how-to-share-live-location-on-google-maps_tmvg.jpg" cover/>
                    </v-col>
                    <v-col cols="12" sm="6" class="pl-8 map">

                        <MapSection />
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
    <section class="contact text-center pt-16 pb-16">
        <div class="contact-title pt-6">
            <h1 class="text-h4 font-weight-bold pb-2 text-white">CONTACT US</h1>
            <p class="text-grey font-italic">Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div class="contact-content mt-12 ">
            <v-container>
                <v-row no-gutters>
                    <v-col cols="12" sm="6">
                        <v-form ref="form" id="form">
                            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Your Name"
                                required bg-color="#F8F9FA" color="#ffc800"></v-text-field>

                            <v-text-field v-model="email" :rules="emailRules" label="Your Email" required
                                bg-color="#F8F9FA" color="#ffc800">
                            </v-text-field>
                            <v-text-field v-model="phone" :counter="12" :rules="phoneRules"
                                label="Your Phone" required bg-color="#F8F9FA" color="#ffc800">
                            </v-text-field>
                            <v-textarea solo name="input-7-4" label="" placeholder="Your Message"
                                bg-color="#F8F9FA" color="#ffc800"></v-textarea>

                            <v-btn  color="orange darken-2" elevation="2" class="mt-12 pa-4 h-75 button" width="224">
                                <span class="text-white text-uppercase text-h6">send message</span>
                            </v-btn>
                        </v-form>
                    </v-col>
                    <v-col cols="12" sm="6" class="pl-8 info">
                        <v-row no-gutters>
                            <v-col cols="12" class="mb-8">
                                <v-card elevation="2" outlined shaped height="150" class="pa-6" color="#F8F9FA">
                                    <v-icon large color="orange darken-2" size="40" >
                                        mdi-map-marker
                                    </v-icon>
                                    <v-card-title>Our Address</v-card-title>
                                    <v-card-subtitle>Alnajar Adam Street, Syria, NY 535022</v-card-subtitle>

                                </v-card>

                            </v-col>
                        </v-row>
                        <v-row no-gutters justify="space-around">
                            <v-col cols="5">
                                <v-card elevation="2" outlined shaped  height="200" class="pa-8" color="#F8F9FA">
                                    <v-icon large color="orange darken-2"  size="40" >
                                        mdi-mail
                                    </v-icon>
                                    <v-card-title>Email Us</v-card-title>
                                    <v-card-subtitle>majidakh1993@gmail.com</v-card-subtitle>

                                </v-card>

                            </v-col>
                            <v-col cols="5">
                                <v-card elevation="2" outlined shaped  height="200" class="pa-8" color="#F8F9FA">
                                    <v-icon large color="orange darken-2"  size="40" >
                                        mdi-phone
                                    </v-icon>
                                    <v-card-title>Call Us</v-card-title>
                                    <v-card-subtitle>+09932901952</v-card-subtitle>
                                </v-card>

                            </v-col>
                        </v-row>


                    </v-col>
                </v-row>
            </v-container>
        </div>
    </section>
    <TheFooter />
</template>


<script>
    import HeroSection from '@/components/HeroSection.vue';
    import MapSection from '@/components/MapSection.vue';

    import TheFooter from '@/components/TheFooter.vue';

    export default {
        components: {
            TheFooter,
            HeroSection,
            MapSection
        },

        data: () => ({
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
        }),
    }
</script>

<style>
    .contact {
        background-image: url(../assets/map-image.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-color: black;
    }
    @media screen and (max-width:914px){

      .location-content .map{
        padding-left: 0 !important;

      }
.contact-content .button{
  margin-bottom: 30px;
}
.contact-content .info{
  padding-left: 0 !important;

}
  }



</style>
