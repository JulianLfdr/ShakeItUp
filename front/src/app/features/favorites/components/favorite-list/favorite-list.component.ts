import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { Cocktail } from 'src/app/shared/models/Cocktail';
import { AppState } from 'src/app/core/store/app.state';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html'
})
export class FavoriteListComponent implements OnInit {

  favorites$: Observable<Cocktail[]> = EMPTY;

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    // this.favorites$ = this.store.select()
  }
}
