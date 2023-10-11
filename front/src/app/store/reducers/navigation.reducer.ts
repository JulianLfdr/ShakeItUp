import { createReducer, on } from "@ngrx/store";
import { navigateTo } from "../actions/navigation.actions";

export const navigationFeatureKey = 'navigation';

export interface NavigationState {
    history: string[],
    currentRoute: string,
    previousRoute: string
}

const MAX_HISTORY_LENGTH = 20;
const initialState: NavigationState = {
    history: [],
    currentRoute: '',
    previousRoute: ''
};

export const navigationReducer = createReducer(
    initialState,
    on(navigateTo, (state, { route }) => ({
        history: [route, ...state.history.slice(0, MAX_HISTORY_LENGTH - 1)],
        currentRoute: route,
        previousRoute: state.currentRoute
    }))
);