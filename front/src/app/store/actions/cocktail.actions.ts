import { createAction, props } from "@ngrx/store";
import { Cocktail } from "src/app/shared/models/Cocktail";

/*
 * Search Cocktails
 */
export const searchCocktails = createAction(
    '[Cocktail] Search Cocktails',
    props<{ searchTerm: string }>()
);

export const searchCocktailsSuccess = createAction(
    '[Cocktail] Search Cocktails Success',
    props<{ cocktails: Cocktail[] }>()
);

export const searchCocktailsError = createAction(
    '[Cocktail] Search Cocktails Error'
);

/*
 * Load Cocktail
 */ 
export const loadCocktail = createAction(
    '[Cocktail] Load Cocktail',
    props<{ id: number }>()
);

export const loadCocktailSuccess = createAction(
    '[Cocktail] Load Cocktail Success',
    props<{ cocktail: Cocktail }>()
);

export const loadCocktailError = createAction(
    '[Cocktail] Load Cocktail Error'
);
