<script setup lang="ts">
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { Character,Result } from '@/characters/interfaces/Character';
import { ref } from 'vue';

const characters = ref<Result[]>([]);
    

rickAndMortyApi.get<Character>('/character')
    .then( resp => {
        // characters.value = resp.data;
        characters.value = resp.data.results
        console.log(characters.value );
        
    })
</script>

<template>
    <ul>
        <li v-for="{id, name} of characters"
        :key="id"
        
        >
        {{ name }}
        </li>

    </ul>
</template>

<style scoped>
</style>