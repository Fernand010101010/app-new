import { createRouter,createWebHistory } from "vue-router";
import Home from '../HomePage.vue';
import About from '../AboutPage.vue';
import NotFoundPage from '../NotFoundPage.vue';

const routes =[
    {
        path :'/',
        component: Home
    },
    {
        path :'/about',
        component : About
    },
    {
        path :'/:pathMatch(.*)*',
        component : NotFoundPage

    },
    {

    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
})
export default router