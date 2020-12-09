<template>
<div class="cartTable">
  <v-container
    class="px-0"
    fluid
  >
    <v-data-table fluid 
        :headers="headers" 
        :items="menuInCart"
        :hide-default-footer="true"
        class="elevation-1">
        <template v-slot:[`item.price`]="{ item }">
              <v-card-subtitle>Rp {{ item.price }}</v-card-subtitle>
        </template>

        <template v-slot:[`item.quantity`]="{ item }">
           <v-card-subtitle> {{ item.quantity }} </v-card-subtitle>
        </template>

        <template v-slot:[`item.subtotal`]="{ item }">
          <v-card-subtitle>Rp {{ item.subtotal }}</v-card-subtitle>
        </template>

        <template v-slot:[`body.append`]="{headers}">
            <td :colspan="3">
                <v-row>
                    <v-col sm="12" class="ml-4">Total</v-col>
                </v-row>
            </td>
            <td :colspan="1">
                <v-row>
                    <v-col sm="12" class="ml-4">Total</v-col>
                </v-row>
            </td>
        </template>
  </v-data-table>
  <div class="bold mt-5">Choose your payment method</div>
  <v-container
    class="px-0"
    fluid>
    <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="n in payment"
        :key="n"
        :value="n">
      <template 
        v-slot:label
        width="2px">
          <img :src="'/img/'+n" width="100px">
      </template>
      </v-radio>
    </v-radio-group>
  </v-container>
  
  <v-btn 
    medium
    class="white--text red darken-1"
    @click="editHandler(item)"
    color="#FAA84B">
      BACK TO CART
  </v-btn>
  <v-btn 
    medium
    class="ml-5 white--text"
    @click="editHandler(item)"
    color="#FAA84B">
      CONFIRM CHECKOUT
  </v-btn>

  </v-container>
</div>
</template>

<script>
  export default {
    name: "checkout_user",
    data () {
      return {
        headers: [
          { text: 'ORDER', value: 'order', class: 'headerDesign'},
          { text: 'PRICE', value: 'price', class: 'headerDesign'},
          { text: 'QUANTITY', value: 'quantity', class: 'headerDesign'},
          { text: 'SUBTOTAL', value: 'subtotal', class: 'headerDesign'},
        ],
        menuInCart: [
          {
            photo: 'menu/fried_chicken.jpeg',
            order: 'Ayam Goreng',
            price: 15000,
            quantity: 2,
            subtotal: 30000,
          },
          {
            photo: 'menu/fried_rice.jpg',
            order: 'Nasi Goreng',
            price: 27000,
            quantity: 1,
            subtotal: 27000
          },
        ],
        payment: {
            dana: 'logo/logo_DANA.png',
            linkAja: 'logo/logo_linkAja.png',
            ovo: 'logo/logo_OVO.png'
        }
        
      }
    },
  }
</script>

<style>
.background {
  background: #FEE8CB;
}
  .cartTable {
    background: #FEE8CB;
    margin: 50px;
  }

  .headerDesign {
    background: #F59D9D;
  }

  .logo {
    width: 2px;
  }
</style>