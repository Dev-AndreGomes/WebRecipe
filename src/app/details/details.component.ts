import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'], // Corrigido: "styleUrl" -> "styleUrls"
})
export class DetailsComponent implements OnInit {
  recipeId: string = ''; // Variável para armazenar o ID ou outro parâmetro da rota

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Captura o parâmetro "id" da rota
    this.recipeId = this.route.snapshot.paramMap.get('id') || '';

    // Exemplo: Fazer uma chamada para buscar os detalhes da receita
    console.log('Receita ID capturado:', this.recipeId);
  }
}
