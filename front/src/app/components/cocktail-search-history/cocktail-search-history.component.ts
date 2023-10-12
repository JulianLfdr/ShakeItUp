import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { selectSearchHistory } from 'src/app/store/selectors/navigation.selectors';

@Component({
  selector: 'app-cocktail-search-history',
  templateUrl: './cocktail-search-history.component.html',
  styleUrls: ['./cocktail-search-history.component.scss']
})
export class CocktailSearchHistoryComponent implements OnInit {

  searchHistory$: Observable<string[]> = EMPTY;

  constructor(
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.searchHistory$ = this.store.select(selectSearchHistory);
  }
}
