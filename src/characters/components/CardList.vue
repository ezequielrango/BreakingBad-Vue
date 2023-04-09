<script setup lang="ts">
import {useCharacters} from '@/characters/composables/useCharacters';
import { useQuery } from '@tanstack/vue-query';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { Character,Result } from '@/characters/interfaces/Character';



// composable functions
// const {characters, isLoading,loadCharacters,hasError,errorMessage} = useCharacters()


// tanstack Query
const getCharactersSlow = async (): Promise<Character[]> => {
  const { data } = await rickAndMortyApi.get<Character[]>("/character");
  console.log(data.results);
  return data.results;
};

const {isLoading, isError,data : characters ,error} = useQuery(
    ['characters'],
    getCharactersSlow,
);

// loadCharacters()
</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    <p v-if="isError">{{ error }}</p>
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