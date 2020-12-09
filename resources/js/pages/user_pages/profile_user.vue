<template>
  <div class="body-profile">
    <v-card class="round-card mx-auto ma-4" width="450">
      <v-card-title class="headline"> My Profile </v-card-title>

      <v-card-text>
        <v-row justify="center">
          <v-avatar size="140">
            <img :src="'/img/' + currentUser.photo" />
          </v-avatar>
        </v-row>

        <div class="pa-4">
          <v-text-field
            v-model="currentUser.username"
            label="Username"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="currentUser.name"
            label="Name"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="currentUser.email"
            label="Email"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="currentUser.address"
            label="Address"
            readonly
          ></v-text-field>
        </div>

        <div class="pa-4">
          <v-btn width="100%" color="success" @click="editProfile">Edit Profile</v-btn>
        </div>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialog" max-width="500px" persistent>
      <v-card>
        <v-card-title>
          Edit Profile 
        </v-card-title>

        <div class="position-absolute" style="top:11px;right:15px;">
          <v-btn @click="dialog = false" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>

        <v-card-text>
          <v-divider></v-divider>

          <v-row justify="center">
            <v-avatar size="140">
              <img :src="'/img/' + currentUser.photo" />
            </v-avatar>
            <v-btn
              color="primary"
              fab
              small
              dark
              style="margin-left: -50px; margin-top: 110px">
              <v-file-input
                hide-input
                hide-details="true"
                class="ml-3 mb-4"
                prepend-icon="mdi-pencil"
              ></v-file-input>
            </v-btn>
          </v-row>

          <div class="pa-4">
            <v-text-field
              v-model="formsEdit.username"
              label="Username"
              disabled
              outlined
            ></v-text-field>
            <v-text-field
              v-model="formsEdit.name"
              label="Name"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="formsEdit.email"
              label="Email"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="formsEdit.address"
              label="Address"
              outlined
            ></v-text-field>

            <v-btn width="100%" color="success">Update</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "profile_user_page",
  props: ["LogonUser"],
  data() {
    return {
      dialog: false,
      formsEdit : '',
    };
  },
  computed: {
    currentUser: {
      get() {
        return this.LogonUser;
      },
    },
  },
  methods:{
    editProfile(){
      this.dialog = true;
      this.formsEdit = {
        id : this.currentUser.id,
        name : this.currentUser.name,
        username : this.currentUser.username,
        email : this.currentUser.email,
        address : this.currentUser.address
      }
    }
  },
  created() {},
};
</script>

<style scoped>
.body-profile {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>