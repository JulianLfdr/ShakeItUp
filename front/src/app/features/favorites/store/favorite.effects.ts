import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { CocktailService } from "src/app/features/cocktails/services/cocktails.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../../core/store/app.state";
import { loadFavoriteCocktails, loadFavoriteCocktailsError, loadFavoriteCocktailsSuccess } from "./favorite.actions";
import { selectFavoriteCocktailIds } from "./favorite.selectors";

@Injectable()
export class FavoritesEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<AppState>,
    private readonly cocktailService: CocktailService
  ) { }

  loadFavoriteCocktail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFavoriteCocktails),
      withLatestFrom(this.store.select(selectFavoriteCocktailIds)),
      switchMap(([_, favoriteCocktailIds]) => {
        return this.cocktailService.loadCocktails(favoriteCocktailIds).pipe(
          map(favoriteCocktails => loadFavoriteCocktailsSuccess({ cocktails: favoriteCocktails })),
          catchError(() => [loadFavoriteCocktailsError()])
        );
      })
    )
  );
}