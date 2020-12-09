<template>
    <div class="card body">
        <v-data-table
        :headers="headers"
        :items="transactions"
        show-expand
        >
        <template v-slot:expanded-item="{headers,item}">
            <td v-if="item.cart.length" class="content-show" :colspan="headers.length">
                <v-data-table
                :items="item.cart"
                :headers="cartHeaders"
                :hide-default-footer="true"
                disable-pagination>

                </v-data-table>
            </td>
        </template>

        </v-data-table>
    </div>
</template>


<script>
export default {
    name : 'transaction',
    data(){
        return {
            headers : [
                {
                    text : 'ID',
                    value : 'id',
                    width : '5%',
                    divider : true,
                    align : 'center',
                },
                {
                    text : 'Customer Name',
                    value : 'customer_name',
                    width : '25%',
                    divider : true,
                    align : 'center',
                },
                {
                    text : 'Method',
                    value : 'method',
                    width : '25%',
                    divider : true,
                    align : 'center',
                },
                {
                    text : 'Total Price',
                    value : 'total_price',
                    width : '15%',
                    divider : true,
                    align : 'center',
                },
                {
                    text : 'Status',
                    value : 'status',
                    width : '15%',
                    divider : true,
                    align : 'center',
                },
                {
                    text : '',
                    value : 'data-table-expand',
                    width : '5%',
                    align : 'center',
                }
            ],
            cartHeaders:[
                {
                    text : 'Menu',
                    value : 'menu_name'
                },
                {
                    text : 'Amount',
                    value : 'amount'
                },
                {
                    text : 'Total',
                    value : 'total'
                },
            ]
        }
    },
    methods: {

    },
    mounted(){

    },
    computed: {
        transactions : {
            get(){
                return this.$store.state.functionalApp.allTransaction;
            }
        }
    },
    created(){
        this.$store.dispatch('functionalApp/getAllTransaction');
    }
}
</script>

<style scoped>
    .body{
        height:100%;
        overflow:auto;
    }

    .content-show{
        padding-left:30px!important;
        padding-right:30px!important;
        padding-top:10px!important;
        padding-bottom:10px!important;
        background:aliceblue;
    }
</style>
