import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchCatalogComponent } from '../search-catalog/search-catalog.component';
import { apiService } from '../services/api.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, SearchCatalogComponent, HttpClientModule],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  recipes: any[] = []; // Definindo a variável de receitas
  itemsPerPage = 4;  // Configurações de paginação
  currentPage = 1;

  // A função para buscar as receitas da API
  constructor(private router: Router, private recipeService: apiService) {}

  ngOnInit(): void {
    this.fetchRecipes(); // Chama a função de busca ao inicializar o componente
  }

  fetchRecipes(): void {
    this.recipeService.getRecipes().subscribe(
      (data) => {
        console.log('Receitas:', data);
        this.recipes = data.recipes; // Atualizando as receitas com os dados da API
      },
      (error) => {
        console.error('Erro ao buscar receitas:', error);
      }
    );
  }

  get paginatedRecipes() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.recipes.slice(startIndex, startIndex + this.itemsPerPage);
  }

  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get totalPages() {
    return Math.ceil(this.recipes.length / this.itemsPerPage);
  }

  tabs = [
    { id: 'tudo', label: 'Tudo', active: true },
    { id: 'receitas-rapidas', label: 'Receitas rápidas', active: false },
    { id: 'pratos-familia', label: 'Pratos para Família', active: false },
    { id: 'cafe-manha', label: 'Café da manhã', active: false },
    { id: 'almoco', label: 'Almoço', active: false },
    { id: 'sopas', label: 'Sopas e Caldos', active: false },
    { id: 'saladas', label: 'Saladas', active: false },
    { id: 'petiscos', label: 'Petiscos e Aperitivos', active: false },
    { id: 'grelhados', label: 'Grelhados e Assados', active: false },
    { id: 'sobremesas', label: 'Sobremesas', active: false },
    { id: 'bebidas', label: 'Bebidas', active: false },
  ];

  tabClicked(tab: any): void {
    this.tabs.forEach(t => t.active = false);
    tab.active = true;
  }

  // Método para navegar para a página de detalhes
  navigateToDetails(recipeId: string): void {
    this.router.navigate(['/details', recipeId]);
  }
}