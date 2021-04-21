import { createWebHistory, createRouter } from 'vue-router'
import Welcome from '../views/Welcome.vue'

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/Projects.vue')
    },
    {
        path: '/skills',
        name: 'Skills',
        component: () => import('../views/Skills.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
