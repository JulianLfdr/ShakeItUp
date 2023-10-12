import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterState, routerFeatureKey } from "../router.state";

export const routerFeature = createFeatureSelector<RouterState>(routerFeatureKey)

export const selectRouterHistory = createSelector(routerFeature, (state: RouterState) => state.history);

export const selectRouterPrevious = createSelector(routerFeature, (state: RouterState) => state.previousRoute);

export const selectRouterCurrent = createSelector(routerFeature, (state: RouterState) => state.currentRoute);
