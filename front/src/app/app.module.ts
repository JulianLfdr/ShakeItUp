import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgIconsModule } from '@ng-icons/core';
import { tablerGlassFull, tablerGlass, tablerGlassOff, tablerCircleArrowLeftFilled, tablerSearch, tablerHeartFilled, tablerHeartBroken } from '@ng-icons/tabler-icons';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CocktailSearchComponent } from './components/cocktail-search/cocktail-search.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app.routing-module';
import { HomeComponent } from './components/home/home.component';
import { cocktailFeatureKey, cocktailReducer } from './store/reducers/cocktail.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CocktailEffects } from './store/effects/cocktail.effects';
import { FormsModule } from '@angular/forms';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { navigationFeatureKey, navigationReducer } from './store/reducers/navigation.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CocktailSearchComponent,
    HeaderComponent,
    HomeComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(cocktailFeatureKey, cocktailReducer),
    StoreModule.forFeature(navigationFeatureKey, navigationReducer),
    EffectsModule.forRoot([CocktailEffects]),
    NgIconsModule.withIcons({ tablerGlassFull, tablerGlass, tablerGlassOff, tablerCircleArrowLeftFilled, tablerSearch, tablerHeartFilled, tablerHeartBroken })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
