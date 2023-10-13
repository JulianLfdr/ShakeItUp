import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './core/store/app.state';
import { navigateTo } from './core/store/actions/router.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.store.dispatch(navigateTo({ route: event.url }));
    });
  }

}
