<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          variant="text"
        >
        <v-icon size="15" color="bg-red" class="text-green-darken-2 ma-2 ">
                                                    mdi-pencil</v-icon>
        </v-btn>

      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Product Information</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
              <div>
                      <h3 class="py-2 px-2 text-center">Product List</h3>
                      <div class="d-inline">
                        <div>
                          <h5>Product Name</h5>
                          <v-text-field  type="text" v-model="ProductName"/>
                        </div>
                        <div>
                          <h5>Category</h5>
                          <v-text-field  type="text" v-model="Category"/>
                        </div>

                      </div>
                      </div>

              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>

  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>
