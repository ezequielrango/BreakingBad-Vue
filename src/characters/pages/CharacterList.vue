<script setup lang="ts">
import CardList from "../components/CardList.vue";
import { useQuery } from '@tanstack/vue-query';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { Character,Result } from '@/characters/interfaces/Character';

const props = defineProps<{title: string, visible: boolean}>()




const {isLoading, data: characterResp} = useQuery(
        ['characters'],
        () => rickAndMortyApi.get<Character[]>("/character")
)
</script>
<template>
        <h1 v-if="isLoading">Loading...</h1>

        <template v-else>
                <h1>{{ props.title }}</h1>
                <CardList :characters="characterResp!.data"/>
        </template>
</template>
<style scoped>
</style>