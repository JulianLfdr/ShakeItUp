import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, map } from 'rxjs';
import { Cocktail } from 'src/app/shared/models/Cocktail';
import { searchCocktails } from 'src/app/features/cocktails/store/cocktail.actions';
import { AppState } from 'src/app/core/store/app.state';
import { selectCocktails } from 'src/app/features/cocktails/store/cocktail.selectors';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html'
})
export class CocktailListComponent implements OnInit {

  cocktails$: Observable<Cocktail[]> = EMPTY;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.cocktails$ = this.store.select(selectCocktails).pipe(
      map(this.mapCocktails)
    );

    this.route.paramMap.subscribe((params) => {
      const name = params.get('name') || '';
      this.store.dispatch(searchCocktails({ searchTerm: name }));
    });
  }

  onSelectCocktail(id: number) {
    this.router.navigate(['/cocktails/details', id]);
  }

  private mapCocktails(cocktails: Cocktail[]): Cocktail[] {
    return cocktails.map(cocktail => ({
      ...cocktail,
      tags: cocktail.tags.length > 3
        ? [...cocktail.tags.slice(0, 3), `${cocktail.tags.slice(3).length}+`]
        : [...cocktail.tags],
    }));
  }
}