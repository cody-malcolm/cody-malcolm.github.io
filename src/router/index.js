// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Welcome from '../views/Welcome.vue'
//
// Vue.use(VueRouter);
//
// const routes = [
//     {
//         path: '/',
//         name: 'welcome',
//         component: Welcome,
//         meta: {
//             title: 'Welcome'
//         }
//     },
//     {
//         path: '/projects',
//         name: 'projects',
//         component: () => import('../views/Projects.vue'),
//         meta: {
//             title: 'Projects'
//         }
//     },
//     {
//         path: '/skills',
//         name: 'skills',
//         component: () => import('../views/Skills.vue'),
//         meta: {
//             title: 'Skills'
//         }
//     },
//     {
//         path: '/about',
//         name: 'about',
//         component: () => import('../views/About.vue'),
//         meta: {
//             title: 'About'
//         }
//     },
//     {
//         path: '/contact',
//         name: 'contact',
//         component: () => import('../views/Contact.vue'),
//         meta: {
//             title: 'Contact'
//         }
//     }
// ]
//
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// });
//
// router.beforeEach(route => {
//     document.title = route.meta.title;
// });
//
// export default router;
