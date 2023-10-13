import { Cocktail } from "src/app/shared/models/Cocktail";

export const favoritesFeatureKey = 'favorites';

export interface FavoritesState {
  favoriteCocktails: Cocktail[],
  favoriteCocktailIds: number[]
}