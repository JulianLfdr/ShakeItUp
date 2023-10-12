import { createAction, props } from "@ngrx/store";
import { Cocktail } from "src/app/shared/models/Cocktail";

// Add / Remove Favorites
export const addFavoriteCocktail = createAction(
    '[Favorite] Add Favorite Cocktail',
    props<{ id: number }>()
);

export const removeFavoriteCocktail = createAction(
    '[Favorite] Remove Favorite Cocktail',
    props<{ id: number }>()
);

// Load Favorites
export const loadFavoriteCocktails = createAction(
    '[Favorite] Load Favorite Cocktails'
);

export const loadFavoriteCocktailsSuccess = createAction(
    '[Favorite] Load Favorite Cocktails Success',
    props<{ cocktails: Cocktail[] }>()
);

export const loadFavoriteCocktailsError = createAction(
    '[Favorite] Load Favorite Cocktails Error'
);