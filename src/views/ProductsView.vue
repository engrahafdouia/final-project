<template>
  <HeroSection  title="Show Our Products" src="/assets/images/products.jpg"/>
  <ProductsSection />
    <TheFooter/>
</template>
<script>
import HeroSection from '@/components/HeroSection.vue';
import ProductsSection from '@/components/ProductsSection.vue';
import TheFooter from '@/components/TheFooter.vue';
export default{
  components:{
    ProductsSection,
    TheFooter,
    HeroSection
},
data(){
  return{
  title:'',

  }
}
}

</script>
