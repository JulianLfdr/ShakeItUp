import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FavoritesState, favoritesFeatureKey } from "./favorites.state";

export const favoriteFeatureState = createFeatureSelector<FavoritesState>(favoritesFeatureKey)

export const selectFavoriteCocktails = createSelector(
  favoriteFeatureState,
  (state: FavoritesState) => state.favoriteCocktails
);

export const selectFavoriteCocktailIds = createSelector(
  favoriteFeatureState,
  (state: FavoritesState) => state.favoriteCocktailIds
);

export const isCocktailInFavorites = (cocktailId: number) => createSelector(
  selectFavoriteCocktailIds,
  (ids: number[]) => ids.includes(cocktailId)
);