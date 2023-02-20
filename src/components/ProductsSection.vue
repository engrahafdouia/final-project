<template>

    <div class=" productSection pa-8 text-center">
        <h1 class="text-h4 font-weight-bold pb-2">Our Products</h1>
        <p class="text-grey font-italic">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <section class="productSection">
        <v-container>
            <v-row class="my-4">
              <v-col cols="12">
                <v-select label="CATEGORY"
                    :items="['smartphones', 'laptops', 'fragrances', 'skincare', 'home-decoration','all']"
                    v-model="CategoryType"
                    ></v-select>
                    <v-text-field label="Search" v-model="searchValue"></v-text-field>
                  </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6" md="6" lg="4" xl="3"
                    v-for="product in filteredProducts" :key="product.id">

                    <v-card class="mx-auto "  cover max-width="350" max-height="600">

                        <v-img  :src="product.images[0]" cover height="273" />
                        <v-card-title>{{ product .title }}</v-card-title>
                        <v-card-subtitle>{{ product . price }} $ - {{ product . category }}</v-card-subtitle>
                        <v-card-text>{{trucate(product . description) }}</v-card-text>
                        <v-card-actions>
                            <!-- <v-btn rounded color="primary" @click="addToCard(product)">
                                <v-icon large color="primary">
                                    mdi-cart
                                </v-icon>
                                addToCart
                            </v-btn> -->
                            <!-- <v-spacer></v-spacer> -->

                              <v-btn rounded color="primary" value='product'  @click="ShowProductDetails(product)"  :to="{name:'singleproduct',params:{id:product.id}}">
                                show
                            </v-btn>

                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script>
import { useAdminProductsStore } from '@/store/AdminProducts';
    import {
        mapActions
    } from 'pinia';
    import {
        mapState
    } from 'pinia';
    // import {
    //     useCartStore
    // } from '@/store/Cart';
    import {
        useProductStore
    } from '@/store/Product';

    export default {
        data() {
            return {
                AllProducts: [],
                CategoryType: null,
                searchValue:'',

            }
        },
        created() {
            // this.LoadProducts()
            this.fetchProducts()
        },
        computed: {
          ...mapState(useAdminProductsStore, ['products']),
            product() {
                return {
                    id: this.id,
                    title: this.title,
                    price: this.price,
                    category: this.category,
                    image: this.image
                };
            },
            //filerProduct
            filteredProducts(){
              // process search input
              if(this.searchValue !='' && this.searchValue){
                return this.products.filter((item)=>{
                  return item.title.toLowerCase().includes(this.searchValue.toLowerCase())
                })
              }
              if (this.CategoryType === "all"){
                return this.products.filter(item => {
                return item

              }
                )}
              if(this.CategoryType){
                return this.products.filter((item)=>{
                  return (item.category ===this.CategoryType)
                })
              }
              // !this.CategoryType||

              return this.products

            },


        },


        methods: {
            // LoadProducts() {
            //     this.axios.get('https://dummyjson.com/products')

            //   //  .then(response =>  console.log(response.data))
            //    .then(response => {this.AllProducts = response.data.products
            //     console.log(response )
            //   })



            // },
            ...mapActions(useAdminProductsStore, ['fetchProducts']),
            trucate(value, length = 50) {
                return value.length <= length ?
                    value : value.substring(0, length) + "...";
            },
            //       ShowProductDetails(){
            //         this.axios.get('https://dummyjson.com/products/'+ this.products.id)
            // .then(response => this.products= response.data);

            //       },
            //...mapActions(useCartStore, ['addToCard']),
            ...mapActions(useProductStore, ['ShowProductDetails']),

        },

    }
</script>

<style>
    .productSection {
        background-color: #F8F9FA;
        padding: 50px;
    }
</style>
