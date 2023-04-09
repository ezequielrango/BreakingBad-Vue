import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { Character,Result } from '@/characters/interfaces/Character';
import { ref , onMounted} from 'vue';
import axios from 'axios';

const characters = ref<Result[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>();



export const useCharacters = () => {

    onMounted(async() => {
       await loadCharacters();
    });

    
    const loadCharacters = async() => {
        if(characters.value.length > 0) return;
        isLoading.value = true;
        
        try {
            const {data:{results}} = await rickAndMortyApi.get<Character[]>('/character')
            characters.value = results;
            isLoading.value = false;

        } catch (error) {
            hasError.value = true;
            isLoading.value = false;

            if(axios.isAxiosError(error)) {
                return errorMessage.value = error.message;
            }       
            errorMessage.value = JSON.stringify(error);
        }
    }


    // if(characters.value.length === 0){
    //     rickAndMortyApi.get<Character>('/character')
    //     .then( resp => {
    //         // characters.value = resp.data;
    //         characters.value = resp.data.results
    //         isLoading.value = false;
    //         console.log(characters.value );
            
    //     })
    // }

    return{
        characters,
        isLoading,
        loadCharacters,
        hasError,
        errorMessage,
    }
}