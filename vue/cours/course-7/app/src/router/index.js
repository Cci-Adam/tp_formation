import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProductAdmin from '../views/Admin/ProductAdmin.vue'
import ProductDetails from '../views/ProductDetails.vue'

const routes = [
    {
        name: 'HomePage',
        path : '/', 
        component: HomePage},
    {
        name: 'ProductAdmin',
        path : '/admin/products',
        component: ProductAdmin
    },
    {
        name: 'ProductDetails', 
        path : '/products/:id', 
        component: ProductDetails
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router