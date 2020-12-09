<template>
  <div class="body-login">
    <h1>Login Page</h1>
    <v-card class="app-body">
      <v-container class="container">
        <div v-show="errors.length" class="alert alert-danger">
            <v-list-item  v-for="(item, i) in errors" :key="i" alert alert-danger>
             • {{ item }}
        
      </v-list-item>
        </div>
         <v-form>
           <v-text-field v-model="form.username"  label="Username" required outlined ></v-text-field>
          <v-text-field type="password" v-model="form.password" label="Password" required outlined></v-text-field>
          <v-btn @click="loginAction" width="100%" color="success" class="mr-4">Login</v-btn>
         </v-form>
 
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "app",  
  data() {
    return {
        form: {
            username : '',
            password : ''
        },
        errors :[]
    };
  },
  computed: {
  },
  methods: {
      loginAction(){
        this.$store.dispatch('currentUser/loginUser',this.form).catch((e) => {
          
          this.errors=[]

          if(!this.form.username)
          {
            this.errors.push('Username is required')
          }
          if(!this.form.password)
          {
            this.errors.push('Password is required')
          }
          else
          {
             this.errors.push(e.response.data.message)
          }
         

        })
      },
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
        height: 100vh;
        padding-top: 50px;
    }

    
</style>