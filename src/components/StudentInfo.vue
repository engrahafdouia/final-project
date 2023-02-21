<template>
  <v-main>

  <!-- start about  -->
  <section  class="bg-grey-lighten-5 pb-20 mb-10" >
<!-- <v-parallax src="../assets/images/about-bg.jpg" default max-height="600px" > -->
  <div id="about">
    <v-container>
    <h2 class="text-h2 text-center pb-10"></h2>
    <v-row justify="center" class="w-25 mr-10">
      <!-- <v-divider color="warning"  ></v-divider> -->
    </v-row>
    <v-container>
    <v-row justify="center">
      <v-col >
      <h1 class="text-h5 font-weight-bold mb-4 ">
        {{ $t('message.Who I') }} ?

          </h1>
          <h3 class="text-h7 subheading font-weight-light">
            {{$t('message.bodyabout')}}

          </h3>

            <v-list-item >
             <h1 class="text-h6">{{ $t('message.Contact Me') }}
               <v-btn icon href="https://github.com/engrahafdouia/" target="_blank">
                 <v-icon>
                    mdi-github
                  </v-icon>
               </v-btn>
               <v-btn icon href="www.linkedin.com/in/rahaf-douair-
              5923001bb " target="_blank">
                     <v-icon>
                                     mdi-linkedin
                                   </v-icon>
                   </v-btn>
             </h1>
              </v-list-item>
              <v-list-item >
                 <h1 class="text-h6">{{ $t('message.Download') }}:
                  <a href="../assets/Rahaf Douair ().pdf" download>{{ $t('message.Download link') }}</a><br>

                 </h1>
              </v-list-item>

    </v-col>


  <!--  <v-col cols="12"  md="4" >
    <v-img >
    <img src="../assets/rahaf.jpg" style="height: 300px">
    <v-main style="height: 250px"></v-main>
  </v-img>
    </v-col> -->
    </v-row>
    </v-container>
    <!-- <hr class="w-25 text-center ml-7" color="warning"> -->
    <!-- <v-row justify="center">
      <v-col cols="12" sm="6" md="4" lg="3" xl="2" v-for="i in 3" :key="i">
    <v-card  color="primary">
    <v-card-text>
    userName
    </v-card-text>
    </v-card>
    </v-col>
    </v-row> -->
    </v-container>
  </div>
<!-- </v-parallax> -->
  </section>


  <!-- end sabout section  -->
  </v-main>
</template>

<script></script>

<style>
#about{
  /* background-image: url('../assets/arrival-bg.jpg'); */
  background-size: cover;
  max-height:400px;
}

</style>




