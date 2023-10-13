import { createReducer, on } from "@ngrx/store";
import { addFavoriteCocktail, loadFavoriteCocktailsSuccess, removeFavoriteCocktail } from "./favorite.actions";
import { FavoritesState } from "./favorites.state";

const initialState: FavoritesState = {
  favoriteCocktails: [],
  favoriteCocktailIds: []
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