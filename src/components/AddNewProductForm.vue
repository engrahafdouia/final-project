
<template>
  <v-form @submit.prevent="addProductAndClear(todo)">
    <v-text-field v-model="todo" type="text"></v-text-field>
    <v-btn type="submit" class="primary">Add</v-btn>
  </v-form>
</template>
<script>
import { useAdminProductsStore } from '@/store/AdminProducts';
import { mapActions } from 'pinia';


export default {
 data() {

    return {
      todo:''
     }
  },

  methods:{
  addProductAndClear(item) {
  if (item.length === 0) {
    return
  }
this.addNewProduct(item)
  todo.value = ''
},
...mapActions(useAdminProductsStore,['addNewProduct']),


}
}
</script>

