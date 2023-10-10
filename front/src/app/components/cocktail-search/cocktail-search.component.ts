import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cocktail } from 'src/app/shared/models/Cocktail';
import { CocktailSeachResult } from 'src/app/shared/models/CocktailSeachResult';
import { searchCocktails } from 'src/app/store/actions/cocktail.actions';
import { AppState } from 'src/app/store/app.state';
import { selectCocktails } from 'src/app/store/selectors/search.selectors';

@Component({
  selector: 'app-cocktail-search',
  templateUrl: './cocktail-search.component.html',
  styleUrls: ['./cocktail-search.component.scss']
})
export class CocktailSearchComponent {

  searchTerm: string = '';

  cocktails$: Observable<Cocktail[]>;
  // seachResults$: Observable<CocktailSeachResult[]>

  constructor(private store: Store<AppState>) {
    this.cocktails$ = this.store.select(selectCocktails);
  }

  onInputChange() {
    this.store.dispatch(searchCocktails({ searchTerm: this.searchTerm }));
  }
  
  showAllResults() {  
    this.store.dispatch(searchCocktails({ searchTerm: this.searchTerm }));
  }
}
