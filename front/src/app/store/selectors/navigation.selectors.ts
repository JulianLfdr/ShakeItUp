import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NavigationState, navigationFeatureKey } from "../reducers/navigation.reducer";

export const navigationFeature = createFeatureSelector<NavigationState>(navigationFeatureKey)

export const selectNavigationHistory = createSelector(navigationFeature, (state: NavigationState) => state.history);

export const selectNavigationPrevious = createSelector(navigationFeature, (state: NavigationState) => state.previousRoute);

export const selectNavigationCurrent = createSelector(navigationFeature, (state: NavigationState) => state.currentRoute);
