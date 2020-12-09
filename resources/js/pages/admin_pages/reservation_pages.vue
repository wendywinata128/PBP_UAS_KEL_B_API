<template>
    <div class="card body">
        <v-data-table
        :headers="headers"
        :items="reservations">

        <template v-slot:[`item.action`]="{item}">
            <v-btn :disabled="item.status == 'Confirmed' || item.status == 'Declined'" @click="detailsReservationClick(item)" width="60%" class="test" color="success" small>Accept</v-btn>
        </template>

        </v-data-table>

        <v-dialog v-model="dialogDetails" max-width="600px">
            <v-card>
                <v-app-bar flat color="rgba(0,0,0,0)">
                    <v-toolbar-title>Please Enter the Table</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn @click="closeDetails" icon>
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-app-bar>
                <v-card-text>

                    <v-text-field v-model="formsEdit.username" outlined placeholder="username" label="Reservation Under the Name" readonly >
                    </v-text-field>

                    <v-text-field v-model="formsEdit.table" outlined color="green" label="Please Enter The Table">
                    </v-text-field>

                   
                    <v-btn @click="declineReservation" width="49%" color="error">
                        Decline
                    </v-btn>
                    <v-btn @click="acceptReservation" width="49%" color="success">
                        Accept
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>


<script>
export default {
    name:'reservation_admin',
    data(){
        return {
            dialogDetails:false,
            formsEdit : {
                id : '',
                username : '',
                date : '',
                guest : '',
                time : '',
                tabel : ''
            },
            headers : [
                {
                    text : 'Username',
                    value : 'username',
                    divider : true,
                    width : '15%'
                },
                {
                    text : 'Date',
                    value : 'date',
                    divider : true,
                    width : '10%'
                },
                {
                    text : 'Guest',
                    value : 'guest',
                    divider : true,
                    width : '5%',
                    align:'center'    
                },
                {
                    text : 'Time',
                    value : 'time',
                    divider : true,
                    width : '5%',
                    align:'center'
                },
                {
                    text : 'Table',
                    value : 'table',
                    divider : true,
                    width : '5%',
                    align : 'center'
                },
                {
                    text : 'Note',
                    value : 'note',
                    divider : true,
                    width : '30%'
                },
                {
                    text : 'Status',
                    value : 'status',
                    divider : true,
                    width : '10%'
                },
                {
                    text : 'Actions',
                    value : 'action',
                    divider : true,
                    width : '15%',
                    align:'center'
                }
            ]
        }
    },
    computed : {
        reservations : {
            get(){
                return this.$store.state.functionalApp.allReservation ;
            }
        }
    },
    methods:{
        getAllReservation(){
            this.$store.dispatch('functionalApp/getAllReservation');
        },
        detailsReservationClick(item){
            this.formsEdit = {
                id : item.id,
                username : item.username,
                date : item.date,
                guest : item.guest,
                time : item.time,
                table : ''
            };
            this.dialogDetails = true;
        },
        closeDetails(){
            this.dialogDetails = false;
        },
        acceptReservation(){
            this.$store.dispatch('functionalApp/updateReservation',this.formsEdit);
            this.dialogDetails = false;
        },
        declineReservation(){
            this.$store.dispatch('functionalApp/declineReservation',this.formsEdit.id);
            this.dialogDetails = false;
        }
    },created(){
        this.getAllReservation();
    }
}
</script>

<style scoped>
    .body{
        width: 100%;
        height:100%;
        padding : 10px;
    }

    .tf-group{
        width:49%;
        display:inline-block;
    }

</style>
