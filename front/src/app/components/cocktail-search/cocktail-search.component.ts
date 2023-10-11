import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktail-search',
  templateUrl: './cocktail-search.component.html',
  styleUrls: ['./cocktail-search.component.scss']
})
export class CocktailSearchComponent {

  searchTerm: string = '';

  constructor(private readonly router: Router) { }

  onInputChange() {
  }
  
  showAllResults() {  
    this.router.navigate(['/cocktails', this.searchTerm]);
  }
}
