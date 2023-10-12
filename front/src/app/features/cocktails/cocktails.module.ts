import { NgModule } from '@angular/core';
import { CocktailService } from './services/cocktails.service';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';
import { StoreModule } from '@ngrx/store';
import { cocktailFeatureKey } from './store/cocktail.state';
import { cocktailReducer } from './store/cocktail.reducer';
import { CocktailsRoutingModule } from './cocktails-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { CocktailEffects } from './store/cocktail.effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CocktailListComponent,
    CocktailDetailsComponent
  ],
  imports: [
    SharedModule,
    CocktailsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(cocktailFeatureKey, cocktailReducer),
    EffectsModule.forFeature([CocktailEffects])
  ],
  providers: [
    CocktailService
  ]
})
export class CocktailsModule { }