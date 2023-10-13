import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from './store/favorite.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesEffects } from './store/favorite.effects';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { favoritesFeatureKey } from './store/favorites.state';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CocktailService } from '../cocktails/services/cocktails.service';

@NgModule({
  declarations: [
    FavoriteListComponent
  ],
  imports: [
    SharedModule,
    FavoritesRoutingModule,
    StoreModule.forFeature(favoritesFeatureKey, favoriteReducer),
    HttpClientModule,
    EffectsModule.forFeature([FavoritesEffects])
  ],
  providers: [CocktailService]
})
export class FavoritesModule { }