import type { RouteRecordRaw } from "vue-router";
import CharacterLayout from "../layout/CharacterLayout.vue";
import CharacterId from "../pages/CharacterId.vue";
import CharacterList from "../pages/CharacterList.vue";
import CharacterSearch from "../pages/CharacterSearch.vue";


export const characterRoute: RouteRecordRaw = {
    path: '/characters',
    redirect: '/characters/list',
    component: CharacterLayout,
    children: [
        { 
            path: 'by/id', 
            name: 'character-id',
            props: {title: 'Por Id'},
            component: CharacterId
        },
        { 
            path: 'list', 
            name: 'character-list',
            props: {title: 'Lista'}, 
            component: CharacterList
        },
        { 
            path: 'search', 
            name: 'character-search',
            props: {title: 'Busqueda'}, 
            component: CharacterSearch
        },
    ]
}
