<script setup lang="ts">
import CardList from "../components/CardList.vue";
import { useQuery } from '@tanstack/vue-query';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { Character,Result } from '@/characters/interfaces/Character';
import characterStore from "@/store/characters.store";

const props = defineProps<{title: string, visible: boolean}>()

const getCharactersCacheFirst = async(): Promise<Result[]> => {
        
        if(characterStore.characters.count > 0){
                return characterStore.characters.list;
        }
        
        const {data} = await rickAndMortyApi.get<Result[]>('/character');
        const dataMod = data.results
        return dataMod
}


        useQuery(
        ['characters'],
        getCharactersCacheFirst,
        {
                onSuccess( dataMod ){
                        characterStore.loadedCharacters(dataMod)
                }
        }
)
</script>
<template>
        <h1 v-if="characterStore.characters.isLoading">Loading...</h1>

        <template v-else>
                <h1>{{ props.title }}</h1>
                <CardList :characters="characterStore.characters.list"/> 
       </template>
</template>
<style scoped>
</style>