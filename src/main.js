import Vue from 'vue';
import App from './App.vue';
import VueMq from 'vue-mq';
import router from './router';
import './assets/normalize.css';
import './assets/reset.css';

Vue.config.productionTip = false

// for media queries - tablets can use mobile layout
Vue.use(VueMq, {
    breakpoints: {
        mobile: 1003,
        desktop: Infinity
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
