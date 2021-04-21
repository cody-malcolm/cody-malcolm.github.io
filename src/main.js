import { createApp } from 'vue';
// import VueMobileDetection from 'vue-mobile-detection';
import App from './App.vue';

import router from './router/index.js';
import './assets/normalize.css';
import './assets/reset.css';

const app = createApp();
console.log(app)
app.use()
console.log(app)
createApp(App).use(router).mount('#app');
