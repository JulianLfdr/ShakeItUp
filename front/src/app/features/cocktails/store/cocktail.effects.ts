import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError } from "rxjs";
import { Injectable } from "@angular/core";
import { CocktailService } from "src/app/features/cocktails/services/cocktails.service";
import { loadCocktail, loadCocktailError, loadCocktailSuccess, searchCocktails, searchCocktailsError, searchCocktailsSuccess } from "./cocktail.actions";

@Injectable()
export class CocktailEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly cocktailService: CocktailService
  ) { }

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
      switchMap((action) => {
        return this.cocktailService.loadCocktail(action.id).pipe(
          map(cocktail => loadCocktailSuccess({ cocktail: cocktail })),
          catchError((error) => [loadCocktailError()])
        );
      })
    )
  );
}