<template>
  <h2 class="text-h4 text-center py-12">Products</h2>

  <!-- <v-text-field
        :loading="loading"
        density="compact"
        variant="solo"
        v-model.trim="searchvalue"
        label="Search products"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
      <v-menu transition="slide-y-reverse-transition">
        <template v-slot:activator="{ props }">
          <v-btn color="purpleme" class="ma-2" v-bind="props">
            Filter By Category
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="productFilterValue('all')">
            <v-list-item-title>All</v-list-item-title>
          </v-list-item>
          <v-list-item @click="productFilterValue('smartphones')">
            <v-list-item-title>smartphones</v-list-item-title>
          </v-list-item>
          <v-list-item @click="productFilterValue('laptops')">
            <v-list-item-title>laptops</v-list-item-title>
          </v-list-item>
          <v-list-item @click="productFilterValue('fragrances')">
            <v-list-item-title>fragrances</v-list-item-title>
          </v-list-item>
          <v-list-item @click="productFilterValue('skincare')">
            <v-list-item-title>skincare</v-list-item-title>
          </v-list-item>
          <v-list-item @click="productFilterValue('groceries')">
            <v-list-item-title>groceries</v-list-item-title>
          </v-list-item>
          <v-list-item @click="productFilterValue('home-decoration')">
            <v-list-item-title>home-decoration</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
  <section class="productSection">
    <v-container>
      <v-text-field
        :loading="loading"
        density="compact"
        variant="solo"
        v-model="searchValue"
        label="Search products"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
      
      <v-select
            label="CATEGORY"
            :items="[
              'smartphones',
              'laptops',
              'fragrances',
              'skincare',
              'home-decoration',
              'all',
            ]"
            v-model="CategoryType"
          ></v-select>
      <v-row class="my-4">
        <v-col cols="12" >


          <!-- <v-text-field label="Search" v-model="searchValue"></v-text-field> -->

        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="4"
          xl="3"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <v-card class="mx-auto"  cover max-width="350" max-height="600">
            <v-img :src="product.images[0]" cover height="273" />
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-subtitle
              >{{ product.price }} $ - {{ product.category }}</v-card-subtitle
            >
            <!-- <v-card-text>{{ trucate(product.description) }}</v-card-text> -->
            <v-card-actions>
              <!-- <v-btn rounded color="primary" @click="addToCard(product)">
                                  <v-icon large color="primary">
                                      mdi-cart
                                  </v-icon>
                                  addToCart
                              </v-btn> -->
              <!-- <v-spacer></v-spacer> -->
              <!-- <v-btn  rounded="pill"
        class="bg-purpleme text-right"

                value="product"
                @click="ShowProductDetails(product)"
                :to="{ name: 'singleproduct', params: { id: product.id } }"
              >
                show
              </v-btn> -->
              <!-- <v-btn
        rounded="pill"
        class="bg-purpleme text-right"
        @click="addToCart({ id, title, price, image, category })"
      >
        <v-icon>mdi-cart</v-icon> Add to cart
      </v-btn> -->
      <v-btn
      rounded="pill"
        class="bg-purpleme text-right"
              @click="addToCard(productDetails)"
            >
              <v-icon large > mdi-cart </v-icon>
              addToCart
            </v-btn>
      <v-btn

        value="product"
                @click="ShowProductDetails(product)"
                :to="{ name: 'singleproduct', params: { id: product.id } }"        rounded="pill"

      >
        Show <v-icon>mdi-eye</v-icon>
      </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>

// import { useProductStore } from "@/store/product";
import { useCartStore } from "@/store/Cart";

import { useAdminProductsStore } from "@/store/AdminProducts";
import { mapActions } from "pinia";
import { mapState } from "pinia";

import { useProductStore } from "@/store/Product";

export default {
  data() {
    return {
      loaded: false,
      loading: false,
      AllProducts: [],
      CategoryType: null,
      searchValue: "",
    };
  },
  created() {
    // this.LoadProducts()
    this.fetchProducts();
  },
  computed: {
    ...mapState(useAdminProductsStore, ["products"]),
    product() {
      return {
        id: this.id,
        title: this.title,
        price: this.price,
        category: this.category,
        image: this.image,
      };
    },


    ...mapState(useProductStore, ["productDetails"]),

    //filerProduct
    filteredProducts() {
      // process search input
      if (this.searchValue != "" && this.searchValue) {
        return this.products.filter((item) => {
          return item.title
            .toLowerCase()
            .includes(this.searchValue.toLowerCase());
        });
      }
      if (this.CategoryType === "all") {
        return this.products.filter((item) => {
          return item;
        });
      }
      if (this.CategoryType) {
        return this.products.filter((item) => {
          return item.category === this.CategoryType;
        });
      }
      // !this.CategoryType||

      return this.products;
    },
  },

  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
    // LoadProducts() {
    //     this.axios.get('https://dummyjson.com/products')

    //   //  .then(response =>  console.log(response.data))
    //    .then(response => {this.AllProducts = response.data.products
    //     console.log(response )
    //   })

    // },

    ...mapActions(useAdminProductsStore, ["fetchProducts"]),
    trucate(value, length = 50) {
      return value.length <= length
        ? value
        : value.substring(0, length) + "...";
    },
    //       ShowProductDetails(){
    //         this.axios.get('https://dummyjson.com/products/'+ this.products.id)
    // .then(response => this.products= response.data);

    //       },
    //...mapActions(useCartStore, ['addToCard']),
    ...mapActions(useProductStore, ["ShowProductDetails"]),
    ...mapActions(useCartStore, ["addToCard"]),
  },
};
</script>

<style>
.productSection {
  background-color: #f8f9fa;
  padding: 50px;
}
</style>
