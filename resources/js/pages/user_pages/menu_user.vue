<template>
    <div class="body-menu">
        <div class="content">
            <div v-for="menus in chunkMenus" :key="menus.index" class="layout-row">
                <v-card class="menu-item" v-for="menu in menus" :key="menu.index" min-height="400px" >
                    <v-img
                    height="250"
                    :src="'/img/'+menu.photo">
                    </v-img>
                    <v-card-title class="card-title">
                        {{menu.name}}
                    </v-card-title>
                    <v-card-subtitle class="card-subtitle">
                        Rp {{menu.price}}
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn @click="addCart(menu)" color="success" class="btn-addCart mb-3" width="80%">ADD TO CART</v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
                
    </div>
</template>

<script>
import chunk from 'chunk'
export default {
    name:'menu_user',
    props:['LogonUser'],
    data(){
        return{

        }
    },
    methods:{
        getAllMenu(){
            this.$store.dispatch('functionalApp/getAllMenu');
        },
        addCart(menu){
            if(this.currentUser == ''){
                alert("You Have to Log on First!");
                return;
            }

            const cart = {
                'username' : this.currentUser.username,
                'menu_name' : menu.name,
                'amount' : 1,
                'status' : 'active'
            };

            this.$store.dispatch('functionalApp/addMenuToCart',cart).catch((e) => {
                alert(e.response.data.message);
            });
        }
    },
    computed:{
        menus : {
            get(){
                return this.$store.state.functionalApp.allMenu
            }
        },
        chunkMenus : {
            get(){
                return chunk(this.$store.state.functionalApp.allMenu,4);
            }
        },
        currentUser : {
            get(){
                return this.LogonUser
            }
        }
    },
    created(){
        this.getAllMenu();
    }
}
</script>

<style scoped>
    .body-menu{
        background: antiquewhite;
        height:100%;
        width: 100%;
    }

    .layout-row{
        display:flex;
        flex-direction: row;
        width: 100%;
        margin: 20px;
        box-sizing: border-box;
    }

    .menu-item{
        flex-basis:25%;
        overflow: hidden;
        margin : 0 auto;
        margin-right: 10px;
        margin-left: 10px;
        box-sizing: border-box;
    }

    .content{
        width: 75%;
        overflow:visible;
        margin : 0 auto;
        text-align:center;
        display:flex;
        flex-direction:column;
        box-sizing: border-box;
    }

    .card-title{
        font-weight: bold;
        font-size: 24px;
    }

    .btn-addCart{
        margin: 0 auto;
    }

    .card-subtitle{
        font-size: 24px;
        font-weight: bold;
        color: black!important;
    }
</style>