export const routerFeatureKey = 'router';

export interface RouterState {
  history: string[],
  currentRoute: string,
  previousRoute: string
}