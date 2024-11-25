import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-search-catalog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-catalog.component.html',
  styleUrl: './search-catalog.component.css'
})
export class SearchCatalogComponent implements OnInit{

  query:string='';

  constructor(
    //private spoonacularService:SpoonacularService, NÃO APAGAR
    private router:Router
  ){}

  searchRecipes(){
    //this.spoonacularService.searchRecipes(this.query); NÃO APAGAR
    this.router.navigate(['/recipes']);
  }


  ngOnInit(): void {
  }

}
