<script setup lang="ts">
import {useCharacters} from '@/characters/composables/useCharacters';
import { useQuery } from '@tanstack/vue-query';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { Character,Result } from '@/characters/interfaces/Character';
import CharacterCard from '@/characters/components/CharacterCard.vue';

interface Props {
    characters: Result[]
}

const props = defineProps<Props>();

// composable functions
// const {characters, isLoading,loadCharacters,hasError,errorMessage} = useCharacters()


// tanstack Query
const getCharactersSlow = async (): Promise<Character[]> => {


    
  const { data } = await rickAndMortyApi.get<Character[]>("/character");
  return data.results;
};

const {isLoading, isError,data : characters ,error} = useQuery(
    ['characters'],
    getCharactersSlow,
    // {
    //     cacheTime: 1000 * 60,
    //     refetchOnReconnect: 'always'
    // }
);

// loadCharacters()
</script>

<template>
    <div class="card-list">
        <CharacterCard 
            v-for="character of characters"
            :key="character.id"
            :character="character"
        />

    </div>
</template>

<style scoped>

.card-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>