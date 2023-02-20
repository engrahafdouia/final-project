<template>
  <!-- <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="markerOptions" />
  </GoogleMap> -->
  <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.6495531501246!2d36.29634018527348!3d33.510493753532174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e732c708ea75%3A0x6869a63ff97a96!2z2KfZhNit2YTYqNmI2YbZitiMINiv2YXYtNmC2Iwg2LPZiNix2YrYpw!5e0!3m2!1sar!2s!4v1673345168585!5m2!1sar!2s"
      width="100%" height="450"
      style="border:none;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  // components: { GoogleMap, Marker },
  // setup() {
  //   const center = { lat: 40.689247, lng: -74.044502 };
  //   const markerOptions = { position: center, label: "L", title: "LADY LIBERTY" };

  //   return { center, markerOptions };
  // },
});
</script>
