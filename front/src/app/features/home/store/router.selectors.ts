import { createSelector } from "@ngrx/store";
import { RouterState } from "src/app/core/store/router.state";
import { routerFeature } from "src/app/core/store/selectors/router.selectors";

export const selectSearchHistory = createSelector(routerFeature, (state: RouterState) => { 
  const history = state.history
      .filter(url => url.includes('/cocktails/'))
      .map(url => url.replace('/cocktails/', ''))
      .filter(url => !url.includes('details'))

  // Distinct and take last 10
  return [...new Set(history)].slice(-10);
});