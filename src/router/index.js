import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ProductDetails from '../views/ProductDetails.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/productdetails/:productname',
        name: 'ProductDetails',
        component: ProductDetails,
        props: true
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router