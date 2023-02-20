<template>
    <v-card>
        <v-layout>

            <v-main style="background-color: #CFCFCF;">
                <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6 pa-4">
                    <h1 class="page-title">Products</h1>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" align="left">
                        <div>
                            <h3 class="py-2 px-2 text-center">Product List</h3>
                            <!-- d-inline -->
                            <div class="d-flex justify-center align-center ">
                                <div class="w-25">
                                    <h5 class="px-3">Product Name</h5>
                                    <v-text-field type="text" v-model="ProductName" class=" px-3 py-3" />
                                </div>
                                <div class="w-25">
                                    <h5  class="px-3">Category</h5>
                                    <v-text-field type="text" v-model="Category" class=" px-3 py-3"/>
                                </div>
                                <div>
                                <v-btn color="primary" @click="AddNewProduct()" class="px-auto">
                                    <v-icon dark>mdi-plus</v-icon>AddProduct
                                </v-btn>
                            </div>
                            </div>

                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <p class="pa-2">ProductsCount is : {{ getProductsCount }}</p>
                    </v-col>
                </v-row>
                <section class=" w-75 ma-auto pt-8 pb-8">
                    <v-row justify="center">
                        <v-col align="center">
                            <v-simple-table class="table">
                                <template v-slot:default align="center">
                                    <thead align="center">
                                        <tr>
                                            <th class="text-center text-green bg-grey-darken-3">
                                                Number
                                            </th>
                                            <th class="text-center text-green bg-grey-darken-3">
                                                ProductName
                                            </th>
                                            <th class="text-center text-green bg-grey-darken-3">
                                                Category
                                            </th>
                                            <th class="text-center text-green bg-grey-darken-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody align="left" class="bg-white">
                                        <tr v-for="item in products" :key="item.id">
                                            <td class="text-center text-green bg-grey-darken-3">
                                                {{ item . id }}</td>
                                            <td> {{ item . title }}</td>
                                            <td class="text-center w-25">{{ item . category }}</td>
                                            <td class="text-center w-25">

                                                <div class="d-flex jistify-row ">
                                                    <v-btn variant="text">
                                                        <v-icon size="15" class="text-red-darken-2 ma-2"
                                                            @click="removeProduct(item.id)">mdi-delete</v-icon>
                                                    </v-btn>
                                                    <AdminEditProduct class="pa-3" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-col>
                    </v-row>

                </section>

            </v-main>
        </v-layout>
    </v-card>
</template>
<script>

    import {
        useAdminProductsStore
    } from '@/store/AdminProducts';

    import {
        mapActions
    } from 'pinia';
    import {
        mapState
    } from 'pinia';
    import {
        mapStores
    } from 'pinia';
    import AddNewProductForm from '@/components/AddNewProductForm.vue';
    import AdminEditProduct from '@/components/AdminEditProduct.vue';


    export default {
        data() {
            return {
                ProductName: '',
                Category: ''
            }
        },
        components: {
            AddNewProductForm,
            AdminEditProduct,
        },
        computed: {
            ...mapState(useAdminProductsStore, ['products', ' ProductName', ' Category', 'getProductName',
                'getProducts', 'getProductsCount'
            ])
        },
        created() {
            this.fetchProducts()
        },
        methods: {
            trucate(value, length = 50) {
                return value.length <= length ?
                    value : value.substring(0, length) + "...";
            },
            AddNewProduct() {
                const id = this.products.length + 1
                const data = {
                    id: id,
                    title: this.ProductName,
                    category: this.Category
                }
                this.products.push(data)
                this.ProductName = ''
                this.Category = ''
            },
            ...mapActions(useAdminProductsStore, ['fetchProducts', 'removeProduct']),
        }

    }
</script>
<style>
    .table th,
    td {
        border: 1px solid grey;
        padding: 5px;
    }

    .header {
        color: #8AF837
    }
</style>
