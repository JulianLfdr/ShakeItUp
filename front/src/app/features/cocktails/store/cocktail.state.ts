import { Cocktail } from "src/app/shared/models/Cocktail";

export const cocktailFeatureKey = 'cocktail';

export interface CocktailState {
  cocktails: Cocktail[]
}