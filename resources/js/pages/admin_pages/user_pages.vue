<template>
    <div class="card body">
        <v-data-table 
        :headers="headers"
        :items="allUsers"
        item-key="id"
        class="content-user"
        :loading="loadingUser"
        loading-text="Loading...">

        <template v-slot:[`item.actions`]="{ item }">
            <v-btn color="error" small @click="deleteUser(item)">
                Delete
            </v-btn>
        </template>
        </v-data-table>
    </div>
</template>


<script>
export default {
    name :"user_pages",
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
                    text : 'Name',
                    value : 'name',
                    width : '20%',
                    divider : true,
                },
                {
                    text : 'Username',
                    value : 'username',
                    width:'20%',
                    divider : true,
                },
                {
                    text : 'Email',
                    value : 'email',
                    width:'20%',
                    divider : true,
                },
                {
                    text : 'Address',
                    value : 'address',
                    width:'20%',
                    divider : true,
                },
                {
                    text : 'Actions',
                    value : 'actions',
                    width:'20%',
                    divider : true,
                    align:'center',
                }
            ],
            loading : true,
        }
    },
    computed : {
        allUsers : {
            get(){
                return this.$store.state.functionalApp.allUser;
            }
        },
        loadingUser : {
            get(){
                return this.allUsers.length == 0;
            }
        }
    },
    methods : {
        getAllUser(){
            this.$store.dispatch('functionalApp/getAllUser');
        },
        deleteUser(item){
            this.$store.dispatch('functionalApp/deleteUserById',item.id).then(() =>  {
                this.getAllUser();
            });
        }
    },
    created(){
        this.getAllUser();
    }
}
</script>

<style scoped>
    .body{
        width: 100%;
        height: 100%;
    }

    .content-user{
        padding:0px;
    }

</style>
