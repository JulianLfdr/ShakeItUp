import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Cocktail } from "../shared/models/Cocktail";

@Injectable({
    providedIn: 'root'
})
export class CocktailService {
    private readonly endpoint = `${environment.cocktailApiUrl}/${environment.cocktailApiKey}`;

    constructor(private readonly httpClient: HttpClient) {}

    searchCocktails(searchTerm: string): Observable<Cocktail[]> {
        if (searchTerm.length > 0) {
            // return this.httpClient.get<Cocktail[]>(`${this.endpoint}/search.php?s=${searchTerm}`);
            var cocktails = [
                new Cocktail(14578, 'Amaretto Sunrise', '', [], 'Ordinary Drink', '', true, 'Highball glass', 'In a highball glass filled with ice add 6cl dark rum and top with ginger beer. Garnish with lime wedge.',
                             'https://www.thecocktaildb.com/images/media/drink/t1tn0s1504374905.jpg', ['Dark Rum', 'Ginger Beer'], ['5 cl', '10 cl']),
                new Cocktail(17211, 'Dark and Stormy', '', ['IBA', 'NewEra'], 'Ordinary Drink', 'New Era Drinks', true, 'Collins Glass', 'Mix together the amaretto and orange juice. Pour into glass and then add the grenadine untill you see the sunrise.',
                             'https://www.thecocktaildb.com/images/media/drink/akcpsh1493070267.jpg', ['Amaretto', 'Orange juice', 'Grenadine'], ['1 cl', '4 oz', '1/4 cl'])
            ]
    
            return of(cocktails);
        }
        return of([]);
    }
}