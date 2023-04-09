<script setup lang="ts">
import {useCharacters} from '@/characters/composables/useCharacters';


const {characters, isLoading,loadCharacters,hasError,errorMessage} = useCharacters()

loadCharacters()
</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    <p v-if="hasError">{{ errorMessage }}</p>
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