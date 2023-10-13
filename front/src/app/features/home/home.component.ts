import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { AppState } from '../../core/store/app.state';
import { Router } from '@angular/router';
import { selectSearchHistory } from './store/router.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

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
