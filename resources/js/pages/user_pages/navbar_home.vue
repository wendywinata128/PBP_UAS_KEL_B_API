<template>
  <div class="user-home">
    <div class="nav-container">
      <b-navbar toggleable="lg">
        <b-navbar-brand style="color: #a60f0f; font-size: 1.4em" class="ml-2" href="#"
          >Restoku</b-navbar-brand
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{name: 'home_user',params: { id: this.$route.params.id },}"
              :active='this.$route.name =="home_user"' right>
              Home
            </b-nav-item>
            <b-nav-item :to="{name: 'menu_user',params: { id: this.$route.params.id },}"
              :active='this.$route.name =="menu_user"'>
              Menu
            </b-nav-item>
            <b-nav-item :to="{name: 'about_us_user',params: { id: this.$route.params.id },}"
              :active='this.$route.name =="about_us_user"'>
              About Us
            </b-nav-item>
            <b-nav-item :to="{name: 'cart_user',params: { id: this.$route.params.id },}"
              :active='this.$route.name =="cart_user"'>
              Cart
            </b-nav-item>
            <b-nav-item :to="{name: 'reservation_user',params: { id: this.$route.params.id },}"
              :active='this.$route.name =="reservation_user"'>
              Reservation
            </b-nav-item>
            <b-nav-item v-if="!currentUser.isLogin" :to="{name: 'login_user',params: { id: this.$route.params.id },}"
              :active='this.$route.name =="login_user"' right>
              Register/Login
            </b-nav-item>
            <b-nav-item-dropdown v-else right>
              <!-- Using 'button-content' slot -->
              <template #button-content :active='this.$route.name =="profile_user"'> User </template>
              <b-dropdown-item :to="{name: 'profile_user',params: { id: this.$route.params.id },}">
                Profile
              </b-dropdown-item>
              <b-dropdown-item @click="logoutUser">Sign Out</b-dropdown-item>
              <b-dropdown-item :to="{path: '/admin'}">Admin</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="home-content">
      <router-view :LogonUser="currentUser.user"></router-view>
    </div>
   
    
  </div>
</template>

<script>
export default {
  name:"navbar_home",
  computed:{
    currentUser : {
      get(){
        return this.$store.state.currentUser;
      }
    }
  },
  methods: {
    logoutUser(){
      this.$store.dispatch('currentUser/logoutUser');
    }
  },created(){
    if(this.currentUser != ''){
      axios.defaults.headers.common["Authorization"] ="Bearer " + localStorage.getItem("access_token");
    }
  }
}
</script>

<style scoped>
  
  div.nav-container {
    background-color: #f9c784;
    color: black;
    font-weight: 600;
    font-size: 1.2em;
  }
  
  .user-home{
    background:antiquewhite;
    min-height: 100vh;
    display:flex;
    flex-direction: column;
  }

  .home-content{
    flex-grow: 1;
  }

 


</style>