<template>
<ContactSection/>
</template>


<script>
import ContactSection from '@/components/ContactSection.vue';


    export default {
        components: {
    ContactSection
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
