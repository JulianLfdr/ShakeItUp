import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';

const routes: Routes = [
  { path: ':name', component: CocktailListComponent },
  { path: 'details/:id', component: CocktailDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocktailsRoutingModule { }