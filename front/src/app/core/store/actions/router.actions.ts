import { createAction, props } from "@ngrx/store";

export const navigateTo = createAction(
  '[Router] Navigate To',
  props<{ route: string }>()
);