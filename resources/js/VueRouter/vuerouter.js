import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


function importAdmin(name){
    return () => import(`../pages/admin_pages/${name}.vue`)
}

function importUser(name){
    return () => import(`../pages/user_pages/${name}.vue`)
}

const router = new VueRouter({
    mode:"hash",
    routes: [
        {   
            name:"admin",
            path:"/admin",
            component: importAdmin('Homepage'),
            children: [
                {
                    name:"user_pages",
                    path:"/admin",
                    component:importAdmin('user_pages')
                },
                {
                    name:"food",
                    path:"/admin/food",
                    component:importAdmin('food_pages')
                },
                {
                    name:"transaction",
                    path:"/admin/transaction",
                    component:importAdmin('transaction_pages')
                },
                {
                    name:"reservation",
                    path:"/admin/reservation",
                    component:importAdmin('reservation_pages')
                }
            ]
        },
        {
            path : "/",
            component : importUser('navbar_home'),
            children:[
                {
                    name:"home_user",
                    path:"/",
                    component : importUser('home_user'),
                },
                {
                    name:"menu_user",
                    path:"/menu",
                    component : importUser('menu_user'),
                },
                {
                    name:"reservation_user",
                    path:"/reservation",
                    component : importUser('reservation_pages'),
                },
                {
                    name:"cart_user",
                    path:"/cart",
                    component : importUser('cart_user'),
                },
                {
                    name:"about_us_user",
                    path:"/about_us",
                    component : importUser('about_us_user')
                },
                {
                    name:"profile_user",
                    path:"/user",
                    component : importUser('profile_user')
                },
                {
                    name:"register_user",
                    path:"/register",
                    component : importUser('register')
                },
                {
                    name:"login_user",
                    path:"/login",
                    component : importUser('Login')
                }
            ]
        },
    ]
});

export default router;