import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgIconsModule } from '@ng-icons/core';
import { tablerGlassFull, tablerGlass, tablerGlassOff } from '@ng-icons/tabler-icons';

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

@NgModule({
  declarations: [
    AppComponent,
    CocktailSearchComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(cocktailFeatureKey, cocktailReducer),
    EffectsModule.forRoot([CocktailEffects]),
    NgIconsModule.withIcons({ tablerGlassFull, tablerGlass, tablerGlassOff })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
