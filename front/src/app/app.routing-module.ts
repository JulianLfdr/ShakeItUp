import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";

export const routes: Routes = [
    { path: 'cocktails', loadChildren: () => import('./features/cocktails/cocktails.module').then((m) => m.CocktailsModule) },
    { path: 'favorites', loadChildren: () => import('./features/favorites/favorites.module').then((m) => m.FavoritesModule) },
    { path: 'home', loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule) },
    { path: 'not-found', component: NotFoundComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '/not-found' }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }