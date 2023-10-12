import { createReducer, on } from "@ngrx/store";
import { loadCocktailSuccess, searchCocktailsSuccess } from "./cocktail.actions";
import { CocktailState } from "./cocktail.state";

const initialState: CocktailState = {
  cocktails: []
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
  }))
);