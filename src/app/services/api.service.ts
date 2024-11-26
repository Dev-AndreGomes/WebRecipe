import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';


@Injectable({
  providedIn: 'root'
})
export class apiService {

  private readonly apiUrl = AppConfig.apiUrl;
  private readonly apiKey = AppConfig.apiKey;

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    // Corrigindo a interpolação da URL
    const url = `${this.apiUrl}/recipes/random?number=10&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
