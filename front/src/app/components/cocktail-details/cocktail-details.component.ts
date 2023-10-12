import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, map, take } from 'rxjs';
import { Cocktail } from 'src/app/shared/models/Cocktail';
import { addFavoriteCocktail, loadCocktail, removeFavoriteCocktail } from 'src/app/store/actions/cocktail.actions';
import { AppState } from 'src/app/store/app.state';
import { selectNavigationHistory } from 'src/app/store/selectors/navigation.selectors';
import { selectCocktails, selectFavoriteCocktails } from 'src/app/store/selectors/cocktail.selectors';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent {
  id: number = 0;
  isFavorite: boolean = false;

  cocktail$: Observable<Cocktail> = EMPTY;
  backUrl$: Observable<string> = EMPTY;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.id = +id;

        // Check if the cocktail is already in the store
        this.store.select(selectCocktails).pipe(
          map(cocktails => cocktails.find(cocktail => cocktail.id === this.id))
        ).subscribe(existingCocktail => {
          if (!existingCocktail) {
            // If the cocktail is not in the store, dispatch the action to load it
            this.store.dispatch(loadCocktail({ id: this.id }));
          }
        });

        // Select the cocktail from the store
        this.cocktail$ = this.store.select(selectCocktails).pipe(
          map(cocktails => cocktails.filter(cocktail => cocktail.id === this.id)[0])
        );
      }
    });

    this.backUrl$ = this.store.select(selectNavigationHistory).pipe(
      take(1),
      map(history => [...history].find(url => url.includes('cocktails')) ?? '/')
    );

    this.store.select(selectFavoriteCocktails).pipe(
      map(favorites => favorites.find(favId => favId === this.id))
    ).subscribe(id => this.isFavorite = id === this.id);
  }

  onFavorite() {
    if (this.isFavorite) {
      this.store.dispatch(removeFavoriteCocktail({ id: this.id }));
    }
    else {
      this.store.dispatch(addFavoriteCocktail({ id: this.id }));
    }
  }
}
