import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { VueQueryPlugin } from '@tanstack/vue-query';
import './assets/main.css';

createApp(App)

//maneja la cache por nosotros
.use(VueQueryPlugin)

.use(router)
.mount('#app')
