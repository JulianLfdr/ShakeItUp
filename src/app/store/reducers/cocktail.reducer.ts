import { createReducer, on } from "@ngrx/store";
import { Cocktail } from "src/app/shared/models/Cocktail";
import { searchCocktailsSuccess } from "../actions/cocktail.actions";

export const cocktailFeatureKey = 'cocktail';

export interface CocktailState {
    cocktails: Cocktail[]
}

const initialState: CocktailState = {
    cocktails: []
};

export const cocktailReducer = createReducer(
    initialState,
    on(searchCocktailsSuccess, (state, { cocktails }) => ({
        ...state,
        cocktails: cocktails
    }))
);