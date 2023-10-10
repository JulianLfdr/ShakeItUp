import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CocktailState, cocktailFeatureKey } from "../reducers/cocktail.reducer";

export const cocktailFeature = createFeatureSelector<CocktailState>(cocktailFeatureKey)

export const selectCocktails = createSelector(cocktailFeature, (state: CocktailState) => state.cocktails);