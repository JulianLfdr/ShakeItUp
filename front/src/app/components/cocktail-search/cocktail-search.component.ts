import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, map, take } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { selectSearchHistory } from 'src/app/store/selectors/navigation.selectors';

@Component({
  selector: 'app-cocktail-search',
  templateUrl: './cocktail-search.component.html',
  styleUrls: ['./cocktail-search.component.scss']
})
export class CocktailSearchComponent implements OnInit {

  searchTerm: string = '';
  
  searchHistory$: Observable<string[]> = EMPTY;

  constructor(
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.searchHistory$ = this.store.select(selectSearchHistory);
  }

  showAllResults() {  
    this.router.navigate(['/cocktails', this.searchTerm]);
  }
}
