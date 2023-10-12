import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { CocktailListComponent } from "./components/cocktail-list/cocktail-list.component";
import { CocktailDetailsComponent } from "./components/cocktail-details/cocktail-details.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { FavoriteListComponent } from "./components/favorite-list/favorite-list.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search', component: HomeComponent },
    { path: 'cocktails/:name', component: CocktailListComponent },
    { path: 'cocktail/:id', component: CocktailDetailsComponent },
    { path: 'favorites', component: FavoriteListComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
]

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {

}