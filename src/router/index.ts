import AboutPage from '@/shared/pages/AboutPage.vue';
import HomePage from '@/shared/pages/HomePage.vue';
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //public
        { path: '/', name : 'home', component: HomePage},
        { path: '/about', name : 'home', component: AboutPage},

        //characters

        {
            path: '/characters', 
            name: 'characters', 
            component: () => import('@/characters/layout/CharacterLayout.vue')
        },

        //default
        {path: '/pathMatch(.*)*', redirect: ()=> ({name: 'home'}) }

    ]
});

export default router;