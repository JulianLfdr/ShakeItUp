import { cocktailFeatureKey, CocktailState } from "./reducers/cocktail.reducer";
import { favoriteFeatureKey, FavoriteState } from "./reducers/favorite.reducer";
import { navigationFeatureKey, NavigationState } from "./reducers/navigation.reducer";

export type AppState = { 
    [cocktailFeatureKey]: CocktailState,
    [favoriteFeatureKey]: FavoriteState,
    [navigationFeatureKey]: NavigationState
};