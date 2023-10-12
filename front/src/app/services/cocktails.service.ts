import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Cocktail } from "../shared/models/Cocktail";

@Injectable({
    providedIn: 'root'
})
export class CocktailService {
    private readonly endpoint = environment.cocktailApiUrl;

    constructor(private readonly httpClient: HttpClient) {}

    searchCocktails(searchTerm: string): Observable<Cocktail[]> {
        if (searchTerm.length > 0) {
            return this.httpClient.get<Cocktail[]>(`${this.endpoint}/search?term=${searchTerm}`);
        }
        return of([]);
    }

    loadCocktail(id: number): Observable<Cocktail> {
        if (id > 0) {
            return this.httpClient.get<Cocktail>(`${this.endpoint}/load?id=${id}`);
        }
        return of();
    }

    loadCocktails(ids: number[]): Observable<Cocktail[]> {
        if (ids.length > 0) {
            return this.httpClient.get<Cocktail[]>(`${this.endpoint}/load-many?ids=${ids}`);
        }
        return of();
    }    
}