import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { Cocktail } from 'src/app/shared/models/Cocktail';
import { searchCocktails } from 'src/app/store/actions/cocktail.actions';
import { AppState } from 'src/app/store/app.state';
import { selectCocktails } from 'src/app/store/selectors/search.selectors';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  cocktails$: Observable<Cocktail[]> = EMPTY;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.cocktails$ = this.store.select(selectCocktails);

    this.route.paramMap.subscribe((params) => {
      const name = params.get('name');
      if (name) {
        this.store.dispatch(searchCocktails({ searchTerm: name || '' }));
      }
    });
  }
}