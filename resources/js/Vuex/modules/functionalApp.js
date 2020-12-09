import axios from 'axios'

const state = {
    allUser : [],
    allMenu : [],
    allTransaction : [],
    allReservation : [],
}

const getters = {
}

const actions = {
    getAllUser({commit}){
        axios.get('/api/users/').then(response => {
            commit('setAllUser',response.data.data);
        })
    },
    deleteUserById({},id){
        axios.post(`/api/user/delete/${id}`).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    },

    getAllMenu({commit}){
        axios.get('/api/menu').then(response => {
            commit('setAllMenu',response.data.data);
        })
    },
    addMenu({},menu){
        axios.post('/api/menu/insert',menu).then(() => {
            this.dispatch('functionalApp/getAllMenu');
        })
    },
    deleteMenuById({},id){
        axios.post(`/api/menu/delete/${id}`).then(response => {
            console.log(response.data);
            this.dispatch('functionalApp/getAllMenu');
        }).catch(error => {
            console.log(error);
        })
    },
    updateMenuById({},menu){
        axios.put(`/api/menu/update/${menu.id}`,menu).then(response => {
            console.log(response.data);
            this.dispatch('functionalApp/getAllMenu');
        }).catch(error => {
            console.log(error);
        })
    },

    getAllTransaction({commit}){
        axios.get('/api/transaction').then(response => {
            console.log(response.data);
            commit('setAllTransaction',response.data.data);
        })
    },

    async addMenuToCart({},cart){
        await axios.post('/api/cart/insert',cart).then(response => {
            console.log(response.data);
            this.dispatch('functionalApp/getAllTransaction');
        })
    },
       
    addReservation({}, reservation) {
        axios.post('/api/reservation/insert', reservation).then(() => {
            alert("Data berhasil diinputkan");
        })
    },
    getAllReservation({commit}){
        axios.get('/api/reservations').then(response => {
            console.log(response.data);
            commit('setAllReservation',response.data.data);
        })
    },
    updateReservation({},reservation){
        axios.post('/api/reservation/confirmed/'+reservation.id,reservation).then(response => {
            console.log(response);
            this.dispatch('functionalApp/getAllReservation');
        }).catch(error => {
            console.log(error.response);
        })
    },
    declineReservation({},id){
        axios.post('/api/reservation/declined/'+id).then(response => {
            console.log(response);
            this.dispatch('functionalApp/getAllReservation');
        }).catch(e => {
            console.log(e.response);
        })
    }

}

const mutations = {
    setAllUser(state,data){
        state.allUser = data;
        console.log(state.allUser);
    },
    setAllMenu(state,data){
        state.allMenu = data;
        console.log(data);
    },
    setAllTransaction(state,data){
        state.allTransaction = data;
        console.log(data);
    },
    setAllReservation(state,data){
        state.allReservation = data;
        console.log(data);
    }
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
}