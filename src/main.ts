import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router';
import { store, key } from './store';


const app = createApp(App);
    app.use(router); //use precisa ser declarado antes
    app.use(store, key);
    app.mount('#app');
