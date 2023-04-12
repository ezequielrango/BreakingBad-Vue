import type { Result } from "@/characters/interfaces/Character"
import { reactive } from "vue";
import rickAndMortyApi from '@/api/rickAndMortyApi';

interface Store {
    characters : {
        list: Result[];
        count: number;
        isLoading: boolean;
        HasError: boolean;
        errorMessage: string | null;
    },

    //métodos

    startLoadingCharacters: () => void;
    loadedCharacters: (data: Result[]) => void;
    loadedCharactersFailed: (error: string) => void;

}
//Initial state
const characterStore = reactive<Store>({
    characters : {
        count: 0,
        errorMessage: null,
        hasError: false,
        isLoading: true,
        list: []
    },



    //Métodos
    async startLoadingCharacters() {
        const {data} = await rickAndMortyApi.get<Result[]>('/character');
        const dataMod = data.results
        this.loadedCharacters(dataMod);
    },
    loadedCharacters(data: Result[] ) {
        // this.characters.count = data.length;
        this.characters = {
            count : data.length,
            errorMessage: null,
            HasError: false,
            isLoading: false,
            list: data,
        }
    },
    loadedCharactersFailed(error: string) {

    }
});

characterStore.startLoadingCharacters();

export default characterStore;