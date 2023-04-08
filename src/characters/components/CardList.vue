<script setup lang="ts">
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { Character,Result } from '@/characters/interfaces/Character';
import { ref } from 'vue';

const {data:{results}} = await rickAndMortyApi.get<Character[]>('/character')
const characters = ref<Result[]>(results);
    

// rickAndMortyApi.get<Character>('/character')
//     .then( resp => {
//         // characters.value = resp.data;
//         characters.value = resp.data.results
//         console.log(characters.value );
        
//     })
</script>

<template>
    <ul>
        <li v-for="character of characters"
        :key="character.id"
        
        >
        {{ character.name }}
        </li>

    </ul>
</template>

<style scoped>
</style>