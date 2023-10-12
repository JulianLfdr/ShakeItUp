
import { CocktailState, cocktailFeatureKey } from "src/app/features/cocktails/store/cocktail.state";
import { FavoritesState, favoritesFeatureKey } from "src/app/features/favorites/store/favorites.state";
import { routerFeatureKey, RouterState } from "./router.state";

export interface AppState { 
    [routerFeatureKey]: RouterState
    [cocktailFeatureKey]: CocktailState,
    [favoritesFeatureKey]: FavoritesState
};