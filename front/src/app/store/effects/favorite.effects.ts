import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, withLatestFrom, of } from "rxjs";
import { Injectable } from "@angular/core";
import { CocktailService } from "src/app/services/cocktails.service";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { loadFavoriteCocktails, loadFavoriteCocktailsError, loadFavoriteCocktailsSuccess } from "../actions/favorite.actions";
import { selectFavoriteCocktailIds } from "../selectors/favorite.selectors";

@Injectable()
export class CocktailEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly store: Store<AppState>,
        private readonly cocktailService: CocktailService
    ) { }

    loadFavoriteCocktail$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadFavoriteCocktails),
            withLatestFrom(this.store.select(selectFavoriteCocktailIds)),
            switchMap(([action, favoriteCocktailIds]) => {
                return this.cocktailService.loadCocktails(favoriteCocktailIds).pipe(
                    map(favoriteCocktails => loadFavoriteCocktailsSuccess({ cocktails: favoriteCocktails })),
                    catchError((error) => [loadFavoriteCocktailsError()])
                );
            })
        )
    );
}