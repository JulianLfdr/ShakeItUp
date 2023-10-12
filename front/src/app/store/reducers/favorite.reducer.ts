import { createReducer, on } from "@ngrx/store";
import { Cocktail } from "src/app/shared/models/Cocktail";
import { addFavoriteCocktail, loadFavoriteCocktailsSuccess, removeFavoriteCocktail } from "../actions/favorite.actions";

export const favoriteFeatureKey = 'favorite-cocktail';

export interface FavoriteState {
    favoriteCocktails: Cocktail[],
    favoriteCocktailIds: number[]
}

const initialState: FavoriteState = {
    favoriteCocktails: [],
    favoriteCocktailIds: [11000]
};

export const favoriteReducer = createReducer(
    initialState,
    on(addFavoriteCocktail, (state, action) => ({
        ...state,
        favoriteCocktailIds: state.favoriteCocktailIds.includes(action.id)
            ? [...state.favoriteCocktailIds]
            : [...state.favoriteCocktailIds, action.id],
    })),
    on(removeFavoriteCocktail, (state, action) => ({
        ...state,
        favoriteCocktailIds: [...state.favoriteCocktailIds.filter(cocktailId => cocktailId !== action.id)]
    })),
    on(loadFavoriteCocktailsSuccess, (state, action) => ({
        ...state,
        favoriteCocktails: action.cocktails
    }))
);