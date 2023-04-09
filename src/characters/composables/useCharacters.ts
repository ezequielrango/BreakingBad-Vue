import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { Character,Result } from '@/characters/interfaces/Character';
import { ref } from 'vue';


export const useCharacters = () => {

    // const {data:{results}} = await rickAndMortyApi.get<Character[]>('/character')
    const characters = ref<Result[]>([]);
    const isLoading = ref<boolean>(true);


    rickAndMortyApi.get<Character>('/character')
    .then( resp => {
        // characters.value = resp.data;
        characters.value = resp.data.results
        isLoading.value = false;
        console.log(characters.value );
        
    })
    return{
        characters,
        isLoading,
    }
}