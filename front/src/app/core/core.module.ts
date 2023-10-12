import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { routerFeatureKey } from './store/router.state';
import { routerReducer } from './store/reducers/router.reducer';

import { NgIconsModule } from '@ng-icons/core';
import { tablerGlassFull, tablerSearch, tablerHeartFilled } from '@ng-icons/tabler-icons';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(routerFeatureKey, routerReducer),
    NgIconsModule.withIcons({ tablerGlassFull, tablerSearch, tablerHeartFilled })
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
