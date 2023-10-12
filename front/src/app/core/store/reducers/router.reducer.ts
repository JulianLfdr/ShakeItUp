import { createReducer, on } from "@ngrx/store";
import { navigateTo } from "../actions/router.actions";
import { RouterState } from "../router.state";

const MAX_HISTORY_LENGTH = 20;
const initialState: RouterState = {
  history: [],
  currentRoute: '',
  previousRoute: ''
};

export const routerReducer = createReducer(
  initialState,
  on(navigateTo, (state, { route }) => ({
    history: [route, ...state.history.slice(0, MAX_HISTORY_LENGTH - 1)],
    currentRoute: route,
    previousRoute: state.currentRoute
  }))
);