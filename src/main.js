import Vue from 'vue';
import App from './App.vue';
import VueMq from 'vue-mq';
import router from './router';
import './assets/normalize.css';
import './assets/reset.css';

Vue.config.productionTip = false

Vue.use(VueMq, {
    breakpoints: {
        mobile: 450,
        tablet: 900,
        desktop: Infinity
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
