import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { VueQueryPlugin } from '@tanstack/vue-query';
import './assets/main.css';

const app = createApp(App)

//maneja la cache por nosotros
.use(VueQueryPlugin)

VueQueryPlugin.install( app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 120,
                refetchOnReconnect: 'always',
            },
        }
    }
})

app.use(router)
app.mount('#app')
