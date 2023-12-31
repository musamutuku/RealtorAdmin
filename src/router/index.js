import { createRouter, createWebHistory } from "vue-router"
import dashboardView from '../views/dashboard.vue'
import housesView from '../views/houses.vue'
import usersView from '../views/users.vue'
import notFoundView from '../views/notFound.vue'
import loginView from '../components/login.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: "login",
            component: loginView
        },
        {
            path: "/admin",
            name: "dashboard",
            component: dashboardView
        },
        {
            path: "/",
            redirect: "/admin"
        },
        {
            path: "/admin/dashboard",
            redirect: "/admin"
        },
        {
            path: "/admin/users",
            name: "users",
            component: usersView
        },
        {
            path: "/admin/houses",
            name: "houses",
            component: housesView
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'notFound', 
            component: notFoundView
        }
    ]
})
export default router