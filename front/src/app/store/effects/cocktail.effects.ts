import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadCocktail, loadCocktailError, loadCocktailSuccess, searchCocktails, searchCocktailsError, searchCocktailsSuccess } from "../actions/cocktail.actions";
import { switchMap, map, catchError } from "rxjs";
import { Injectable } from "@angular/core";
import { CocktailService } from "src/app/services/cocktails.service";

@Injectable()
export class CocktailEffects {

    searchCocktails$ = createEffect(() =>
        this.actions$.pipe(
            ofType(searchCocktails),
            switchMap(({ searchTerm }) =>
                this.cocktailService.searchCocktails(searchTerm).pipe(
                    map(cocktails => searchCocktailsSuccess({ cocktails: cocktails })),
                    catchError(() => [searchCocktailsError()])
                )
            )
        )
    );

    loadCocktail$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCocktail),
            switchMap(({ id }) =>
                this.cocktailService.loadCocktail(id).pipe(
                    map(cocktail => loadCocktailSuccess({ cocktail: cocktail })),
                    catchError(() => [loadCocktailError()])
                )
            )
        )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly cocktailService: CocktailService
    ) { }
}