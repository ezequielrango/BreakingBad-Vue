import type { Result } from "@/characters/interfaces/Character"

interface Store {
    Characters : {
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