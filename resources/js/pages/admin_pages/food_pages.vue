<template>
    <div class="body">
        <div class="card content">
            <v-data-table 
                class="table-content"
                :headers="tableHeaders"
                :items = "menus"
                :footer-props="{'items-per-page-options':[15, 30, 50, 100, -1]}"
                >
                    <template v-slot:[`item.action`]="{ item }">
                        <v-btn class="mr-1 ml-1" @click="updateItem(item)" small color="primary">UPDATE</v-btn>
                        <v-btn class="ml-1 mr-1" @click="deleteMenu(item)" small color="error">DELETE</v-btn>
                    </template>
                </v-data-table>
        </div>

        <div class="card sidebar">
            <h3 class="sidebar-title">Add New Food</h3>
            <v-form v-model="valid" ref="form">
                <v-text-field v-model="forms.name" ref="form" :counter="18" :rules="nameRules" outlined placeholder="Name" label="Name" loading>
                    <template v-slot:progress>
                        <v-progress-linear
                        :value="progress(forms.name)"
                        absolute
                        height="5"
                        :color="color(forms.name)">
                        </v-progress-linear>
                    </template>
                </v-text-field>

                <v-select v-model="forms.type" outlined placeholder="Type" :items="['Food','Drink']"></v-select>
                <v-text-field v-model="forms.price" outlined placeholder="Price" loading label="Price">
                    <template v-slot:progress>
                        <v-progress-linear
                        :value="progress(forms.price)"
                        absolute
                        height="5"
                        >
                        </v-progress-linear>
                    </template>
                </v-text-field>
                <v-file-input v-model="photoBase64" placeholder="Photo" :prepend-icon="''" :prepend-inner-icon="'mdi-file-image-outline'" outlined label="Photo"></v-file-input>
                <v-btn :disabled="!valid" width="100%" color="success" @click="addMenu">ADD</v-btn>
            </v-form>

            <v-dialog v-model="dialogUpdate" persistent max-width="600px">
                <v-card class="body-update" >  
                    <v-app-bar flat color="rgba(0,0,0,0)">
                        <v-toolbar-title>Update Menu</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn @click="closeUpdate" icon>
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-app-bar> 
                    <v-divider class="divider"></v-divider>
                    <v-card-text>
                        <img :src="'/img/'+photoMenu" width="100%" height="300px" class="mb-4"> 
                        <v-text-field v-model="formsEdit.id" outlined label="ID" disabled></v-text-field>
                        <v-text-field v-model="formsEdit.name" outlined label="Name"></v-text-field>
                        <v-select v-model="formsEdit.type" :items="['Food','Drink']" outlined label="Type"></v-select>
                        <v-text-field v-model="formsEdit.price" outlined label="Price"></v-text-field>
                        <v-file-input v-model="photoBase64" placeholder="Photo" :prepend-icon="''" :prepend-inner-icon="'mdi-file-image-outline'" outlined label="Photo"></v-file-input>
                        <v-btn @click="updateMenu" color="success" width="100%">UPDATE</v-btn>
                    </v-card-text>
                </v-card>
            </v-dialog>
            
        </div>
        
    </div>
</template>


<script>
export default {
    name:'food',
    data(){
        return{
            valid : true,
            dialogUpdate : false,
            photoBase64 : [],
            photoMenu : '',
            forms : {
                name : '',
                price : '',
                type : '',
                photo : [],
            },
            formsEdit : {
                id : '',
                name : '',
                price : '',
                type : '',
                photo : [],
            },
            nameRules : [
                v => !!v || 'Name is Required',
                v => (!!v && v.length <= 18) || 'Name must be less than 18 characters'
            ],
            tableHeaders : [
                {
                    text : 'ID',
                    value : 'id',
                    align : 'center',
                    divider : true,
                    width : '10%'
                },
                {
                    text : 'Name',
                    value : 'name',
                    divider : true,
                    width : '35%',
                },
                {
                    text : 'Type',
                    value : 'type',
                    divider : true,
                    width : '15%',
                },
                {
                    text : 'Price',
                    value : 'price',
                    divider : true,
                    width : '15%',
                },
                {
                    text : 'Action',
                    value : 'action',
                    divider : true,
                    width : '25%',
                    align : 'center'
                }
            ],
            pagination : {
                itemsPerPage : 15,
                pageStart : 1,
                pageStop : 3,
                pageCount : 15,
            }
        }
    },
    methods : {
        addMenu(){

            var fileReader = new FileReader();

            try{
                fileReader.readAsDataURL(this.photoBase64);
                console.log(this.photoBase64);
            }catch(e){
                alert("File Input Harus ada!");
                return;
            }
            
            fileReader.onload = () => {
                this.forms.photo = fileReader.result;
                console.log(this.forms.photo);
                this.photoBase64 = [];
                this.$store.dispatch('functionalApp/addMenu',this.forms).then(()=>{
                    this.$refs.form.reset();
                })
                
            }
        },
        setAllMenu(){
            this.$store.dispatch('functionalApp/getAllMenu');
        },
        resetForm(){
            this.forms = {
                name : '',
                price : '',
                type : '',
                photo : '',
            }
        },
        deleteMenu(item){
            this.$store.dispatch('functionalApp/deleteMenuById',item.id);
        },
        //Update Item Buat buka dialog menu update
        updateItem(item){ 
            this.dialogUpdate = true
            this.formsEdit = {
                id : item.id,
                name : item.name,
                type : item.type,
                price : item.price,
            }
            this.photoMenu = item.photo;
            console.log(this.photoMenu);
        },
        closeUpdate(){
            this.dialogUpdate = false
        },
        //Update Menu buat proses update menu ke server
        updateMenu(){
            var fileReader = new FileReader()

            try{
                fileReader.readAsDataURL(this.photoBase64)
                fileReader.onload = () => {
                    this.formsEdit.photo = fileReader.result;
                    this.$store.dispatch('functionalApp/updateMenuById',this.formsEdit);
                    this.dialogUpdate = false;
                }
            }catch(e){
                this.formsEdit.photo = null;
                this.$store.dispatch('functionalApp/updateMenuById',this.formsEdit);
                this.dialogUpdate = false;
            }

            this.photoBase64 = [];
        }
    },
    computed:{
        progress(){
            return function (value){
                if(!!value)
                    return Math.min(100,value.length * 6);
            }
        },
        color(){
            return function(value){
                if(!!value && value.length > 18)
                    return 'red'
                else
                    return 'black'
            }
        },
        menus : {
            get(){
                return this.$store.state.functionalApp.allMenu;
            }
        }
    },
    created(){
        this.setAllMenu();
    }
}
</script>

<style scoped>
    .body{
        display:flex;
        flex-direction:row;
        height: 100%;
    }

    .body-update{
        padding:20px;
    }

    .content{
        flex-basis:75%;
        margin-right: 1%;
    }    

    .sidebar{
        flex-basis:25%;
        margin-left: 1%;
    }

    .sidebar-title{
        padding:20px;
        background: #FEE8CB;
        text-align:center;
    }

    form{
        padding:15px;
    }    

    .table-content{
        min-height:100vh!important;
        overflow: auto!important;
    }


</style>

