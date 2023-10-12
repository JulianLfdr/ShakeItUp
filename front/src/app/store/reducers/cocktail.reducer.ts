import { createReducer, on } from "@ngrx/store";
import { Cocktail } from "src/app/shared/models/Cocktail";
import { addFavoriteCocktail, loadCocktailSuccess, removeFavoriteCocktail, searchCocktailsSuccess } from "../actions/cocktail.actions";

export const cocktailFeatureKey = 'cocktail';

export interface CocktailState {
    cocktails: Cocktail[],
    favorites: number[]
}

const initialState: CocktailState = {
    cocktails: [],
    favorites: [11000]
};

export const cocktailReducer = createReducer(
    initialState,
    on(searchCocktailsSuccess, (state, { cocktails }) => ({
        ...state,
        cocktails: cocktails
    })),
    on(loadCocktailSuccess, (state, { cocktail }) => ({
        ...state,
        cocktails: [...state.cocktails, cocktail]
    })),
    on(addFavoriteCocktail, (state, { id }) => ({
        ...state,
        favorites: state.favorites.find(favId => favId === id)
            ? [...state.favorites]
            : [...state.favorites, id]
    })),
    on(removeFavoriteCocktail, (state, { id }) => ({
        ...state,
        favorites: [...state.favorites.filter(favId => favId !== id)]
    }))
);