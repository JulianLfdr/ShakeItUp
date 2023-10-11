import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, distinct, last, map, take, takeLast } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { selectNavigationHistory } from 'src/app/store/selectors/navigation.selectors';

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
    this.searchHistory$ = this.store.select(selectNavigationHistory).pipe(
      take(1),
      distinct(),
      takeLast(10),
      map(history => {
        return history.filter(url => url.includes('cocktails'))
          .map(url => url.replace('/cocktails/', ''))
      }),
    );
  }

  showAllResults() {  
    this.router.navigate(['/cocktails', this.searchTerm]);
  }
}
