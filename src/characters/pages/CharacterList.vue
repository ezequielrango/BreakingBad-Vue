<script setup lang="ts">
import CardList from "../components/CardList.vue";
import { useQuery } from '@tanstack/vue-query';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { Character,Result } from '@/characters/interfaces/Character';
import type characterStore from "@/store/characters.store";

const props = defineProps<{title: string, visible: boolean}>()




// const {isLoading, data: characterResp} = useQuery(
//         ['characters'],
//         () => rickAndMortyApi.get<Result[]>("/character")
// )
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