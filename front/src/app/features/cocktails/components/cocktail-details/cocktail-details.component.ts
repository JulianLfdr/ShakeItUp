import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, Subject, map, takeUntil } from 'rxjs';
import { Cocktail } from 'src/app/shared/models/Cocktail';
import { loadCocktail } from 'src/app/features/cocktails/store/cocktail.actions';
import { AppState } from 'src/app/core/store/app.state';
import { selectCocktailById } from 'src/app/features/cocktails/store/cocktail.selectors';
import { isCocktailInFavorites } from 'src/app/features/favorites/store/favorite.selectors';
import { addFavoriteCocktail, removeFavoriteCocktail } from 'src/app/features/favorites/store/favorite.actions';
import { selectSearchHistory } from 'src/app/features/home/store/router.selectors';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html'
})
export class CocktailDetailsComponent implements OnInit, OnDestroy {

  isFavorite: boolean = false;

  cocktail$: Observable<Cocktail | undefined> = EMPTY;
  backUrl$: Observable<string> = EMPTY;
  unsubscribe$: Subject<boolean> = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    const cocktailId = +this.route.snapshot.paramMap.get('id')!;

    this.cocktail$ = this.store.select(selectCocktailById(cocktailId));

    this.store.select(isCocktailInFavorites(cocktailId))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(isInFavorites => {
        this.isFavorite = isInFavorites;
      });

    this.store.dispatch(loadCocktail({ id: cocktailId }));

    this.backUrl$ = this.store.select(selectSearchHistory).pipe(
      map(history => history.length > 0 ? `/cocktails/${history.shift()}` : '/')
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(false);
    this.unsubscribe$.complete();
  }

  onToggleFavorite(cocktailId: number) {
    if (this.isFavorite) {
      this.store.dispatch(removeFavoriteCocktail({ id: cocktailId }));
    }
    else {
      this.store.dispatch(addFavoriteCocktail({ id: cocktailId }));
    }
  }
}
