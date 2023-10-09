import { RouterModule, Routes } from "@angular/router";
import { CocktailSearchComponent } from "./components/cocktail-search/cocktail-search.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    { path: '', component: CocktailSearchComponent },
    { path: 'search', component: CocktailSearchComponent },
    // { path: 'not-found', component: NotFoundComponent }
    // { path: '**', redirectTo: '/not-found' }
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