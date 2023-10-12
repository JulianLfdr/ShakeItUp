import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, Subject, map, takeUntil } from 'rxjs';
import { Cocktail } from 'src/app/shared/models/Cocktail';
import { loadCocktail } from 'src/app/store/actions/cocktail.actions';
import { AppState } from 'src/app/store/app.state';
import { selectSearchHistory } from 'src/app/store/selectors/navigation.selectors';
import { selectCocktailById } from 'src/app/store/selectors/cocktail.selectors';
import { isCocktailInFavorites } from 'src/app/store/selectors/favorite.selectors';
import { addFavoriteCocktail, removeFavoriteCocktail } from 'src/app/store/actions/favorite.actions';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
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
