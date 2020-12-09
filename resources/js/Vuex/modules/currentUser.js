import axios from 'axios'
import router from '../../VueRouter/vuerouter'
const state = {
    user : {
    },
    isLogin : false,
}
const getters = {}
const actions = {
    async loginUser({commit},user){
        await axios.post('/api/user/login',{
            username : user.username,
            password : user.password
        }).then(response =>{
            if(response.data.token){
                console.log('Login Berhasil');
                localStorage.setItem('access_token',response.data.token);
                commit('setUserLogin',response.data.data);
                router.push('/');
            }
        })
    },
    logoutUser({commit}){
        axios.post('/api/user/logout').then(response => {
            console.log('Logout Berhasil');
            localStorage.removeItem('access_token');
            commit('setUserLogout');
            router.push('/');
        })
    },
    async registerUser({ commit }, user) {
        await axios.post('/api/user/register', {
            username: user.username,
            password: user.password,
            name: user.name,
            address: user.address,
            email: user.email,
            photo: user.photo

        }).then(response => {
            if (response.data) {
                console.log('Register berhasil');
                router.push('/');
            }
        })
    }
}
const mutations = {
    setUserLogin(state,data){
        state.user = data;
        state.isLogin = true;
    },
    setUserLogout(state,data){
        state.user = [],
        state.isLogin = false;
    },
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}