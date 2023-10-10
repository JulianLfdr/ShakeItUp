import { cocktailFeatureKey, CocktailState } from "./reducers/cocktail.reducer";

export type AppState = { 
    [cocktailFeatureKey]: CocktailState
};