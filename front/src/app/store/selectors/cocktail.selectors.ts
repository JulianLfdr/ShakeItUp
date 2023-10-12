import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CocktailState, cocktailFeatureKey } from "../reducers/cocktail.reducer";
import { Cocktail } from "src/app/shared/models/Cocktail";

export const cocktailFeatureState = createFeatureSelector<CocktailState>(cocktailFeatureKey)

export const selectCocktails = createSelector(
    cocktailFeatureState,
    (state: CocktailState) => state.cocktails
);

export const selectCocktailById = (id: number) => createSelector(
    selectCocktails,
    (cocktails: Cocktail[]) => cocktails.find(cocktail => cocktail.id === id)
)