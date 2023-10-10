import { createAction, props } from "@ngrx/store";
import { Cocktail } from "src/app/shared/models/Cocktail";

export const searchCocktails = createAction(
    '[Cocktail] Search',
    props<{ searchTerm: string }>()
);

export const searchCocktailsSuccess = createAction(
    '[Cocktail] Search Success',
    props<{ cocktails: Cocktail[] }>()
);

export const searchCocktailsError = createAction(
    '[Cocktail] Search Error'
);