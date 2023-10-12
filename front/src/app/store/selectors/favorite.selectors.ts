import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FavoriteState, favoriteFeatureKey } from "../reducers/favorite.reducer";
import { Cocktail } from "src/app/shared/models/Cocktail";

export const favoriteFeatureState = createFeatureSelector<FavoriteState>(favoriteFeatureKey)

export const selectFavoriteCocktails = createSelector(
    favoriteFeatureState,
    (state: FavoriteState) => state.favoriteCocktails
);

export const selectFavoriteCocktailIds = createSelector(
    favoriteFeatureState,
    (state: FavoriteState) => state.favoriteCocktailIds
);

export const isCocktailInFavorites = (cocktailId: number) => createSelector(
    selectFavoriteCocktailIds,
    (ids: number[]) => ids.includes(cocktailId)
);