<template>
  <div class="body-login">
    <h1>Register Page</h1>
    <v-card class="app-body">
      <v-container class="container">
           <div v-show="errors.length" class="alert alert-danger">
            <v-list-item  v-for="(item, i) in errors" :key="i" alert alert-danger>
                • {{ item }} 

      </v-list-item>
        </div>
        <v-text-field v-model="form.username" label="Username" required outlined ></v-text-field>
        <v-text-field type="password" v-model="form.password" label="Password" required outlined></v-text-field>
        <v-text-field type="email" v-model="form.email" label="Email" required outlined></v-text-field>
        <v-text-field v-model="form.name" label="Name" required outlined></v-text-field>
        <v-text-field v-model="form.address" label="Address" required outlined></v-text-field>
        <v-text-field v-model="form.photo" label="photo" required outlined></v-text-field>

        <v-btn @click="registerAction" width="100%" color="success" class="mr-4">Register</v-btn>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Register",  
  data() {
    return {
        form: {
            username : '',
            password : '',
            name: '',
            address: '',
            email: '',

        },
        errors : []
    };
  },
  computed: {
  },
  methods: {
      registerAction(){
        this.$store.dispatch('currentUser/registerUser',this.form).catch((e) => {
           this.errors=[]

          if(!this.form.username)
          {
            this.errors.push('Username is required')
          }
          if(!this.form.password)
          {
            this.errors.push('Password is required')
          }
           if(!this.form.address)
          {
            this.errors.push('Address is required')
          }
          if(!this.form.email)
          {
            this.errors.push('Email is required')
          }
           if(!this.form.name)
          {
            this.errors.push('Name is required')
          }
          else
          {
             this.errors.push('Register is Failed')
          }
         
        })
      },
  },
  mounted(){
      let self = this
      window.addEventListener('keyup',function(event){
          if(event.keyCode === 13){
              self.registerAction();
          }
      })
  },
  created() {
  },
};
</script>

<style>
    h1{
        color:aliceblue;
        text-align:center;
        margin-bottom: 20px;
    }

    .app-body{
        width: 30%;
        margin:0 auto;
        padding:40px;
    }

    .text{
        width: 100%;
    }

    .body-login{
        background-color: cornflowerblue;
        height: 100%;
      
    }

    
</style>