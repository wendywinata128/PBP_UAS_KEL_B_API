<template>
  <div class="body-home">
    <div class="sidebar">
        <div class="header card">
            <v-avatar size="112">
                <img src="/img/avatar_default.png">
            </v-avatar>
            <h4 class="header-title">{{ currentUser.user.name }}</h4>
            <v-btn @click="logoutUser" color="error" class="header-logout">Log Out</v-btn>
        </div>
        <div class="content card">
            <div class="content-title">
                <h3>Quick Navigation</h3>
            </div>
            <v-list rounded>
                <v-list-item
                color="primary"
                v-for="menu in menus"
                :key="menu.to"
                link
                tag="router-link"
                :to="menu.to"
                exact>

                <v-list-item-content>
                    <v-list-item-title class="navigation-title">
                        {{ menu.title }}
                    </v-list-item-title>
                </v-list-item-content>

                </v-list-item>
            </v-list>
        </div>
    </div>
    <div class="body-content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "homepage",
  data() {
    return {
        menus:[
            {title: 'User', to: '/admin'},
            {title: 'Food', to: '/admin/food'},
            {title: 'Transaction', to: '/admin/transaction'},
            {title: 'Reservation', to: '/admin/reservation'},
            {title: 'Back to Web', to : '/'}
        ],
    };
  },
  computed: {
    currentUser: {
      get() {
        return this.$store.state.currentUser;
      },
    },
  },
  methods: {
      logoutUser(){
          this.$store.dispatch('currentUser/logoutUser');
      }
  },
  created() {
    if (!this.currentUser.isLogin) {
      this.$router.push("/");
    }
    axios.defaults.headers.common["Authorization"] ="Bearer " + localStorage.getItem("access_token");
  },
};
</script>

<style>
    .body-home {
        background-color: #FDE8CB;
        height: 100%;
        padding: 20px;
        display: flex;
        flex-direction: row;
    }

    .card{
        border-radius: 20px;
        box-shadow: -1px 2px 7px 1px #666666;
        overflow:hidden;
    }

    .sidebar{
        flex-basis: 20%;
        display: flex;
        flex-direction: column;
    }

    .sidebar .header{
        flex-basis: 250px;
        margin:10px;
        padding:20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .sidebar .header-title{
        font-weight: bold;
        margin-top:10px;
    }

    .sidebar .header-logout{
        width: 90%;
        margin : 10px;
    }

    .sidebar .content{
        flex-grow: 1;
        margin: 10px;
    }

    .sidebar .content-title{
        padding:20px;
        background: #FEE8CB;
        text-align:center;
    }

    .sidebar .navigation-title{
        text-align:center;
        font-size: 24px;
        margin:10px;
    }

    .body-content{
        flex-basis: 80%;
        margin:10px;
    }

    a:hover{
        text-decoration:none;
    }

    
</style>