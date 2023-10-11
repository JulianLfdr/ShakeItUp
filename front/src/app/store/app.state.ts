import { cocktailFeatureKey, CocktailState } from "./reducers/cocktail.reducer";
import { navigationFeatureKey, NavigationState } from "./reducers/navigation.reducer";

export type AppState = { 
    [cocktailFeatureKey]: CocktailState,
    [navigationFeatureKey]: NavigationState
};