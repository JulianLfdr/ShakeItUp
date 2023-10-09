import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgIconsModule } from '@ng-icons/core';
import { tablerGlassFull } from '@ng-icons/tabler-icons';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CocktailSearchComponent } from './components/cocktail-search/cocktail-search.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app.routing-module';
import { HomeComponent } from './components/home/home.component';

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
    StoreModule.forRoot({}, {}),
    NgIconsModule.withIcons({ tablerGlassFull })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
