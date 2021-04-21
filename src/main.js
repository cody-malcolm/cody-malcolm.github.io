import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import './assets/normalize.css';
import './assets/reset.css';

createApp(App).use(router).mount('#app');
