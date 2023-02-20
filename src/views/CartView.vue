<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6" md="6" lg="4" xl="3" v-for="(item,i) in items" :key="item.id">
                <v-card>
                    <v-img :src="item.images[0]" cover height="273px" />
                    <v-card-title>{{ item . title }}</v-card-title>
                    <v-card-subtitle>{{ item . price }} $ - {{ item . category }}</v-card-subtitle>
                    <v-card-text>{{ item . description }}</v-card-text>
                    <v-card-actions>
                        <v-btn color="error" text @click="removeItem(i)">
                            <v-icon large color="error">
                                mdi-delete
                            </v-icon>
                            removeItem
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import {
        mapActions,
        mapState
    } from 'pinia';
    import {
        useCartStore
    } from '@/store/Cart';
    export default {
        computed: {
            ...mapState(useCartStore, ['items'])
        },
        methods: {
            ...mapActions(useCartStore, ['removeItem'])
        }

    }
</script>
