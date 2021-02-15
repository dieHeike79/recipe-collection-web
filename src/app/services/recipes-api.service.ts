import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesApiService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient)  { }

  getRecipes() {
    return this.http.get<any[]>(`${this.baseUrl}/recipes`);
  }

  getRecipe(id) {
    return this.http.get<any>(`${this.baseUrl}/recipes/${id}`);
  }

  addRecipe(recipe: any) {
    return this.http.post(`${this.baseUrl}/recipes`, recipe);
  }

  updateRecipe(recipe: any) {
    return this.http.put(`${this.baseUrl}/recipes/${recipe.id}`, recipe);
  }

  saveRecipe(recipe: any) {
    if (recipe.id) {
      return this.updateRecipe(recipe);
    } else {
      return this.addRecipe(recipe);
    }    
  }

  deleteRecipe(recipe: any) {
    return this.http.delete(`${this.baseUrl}/recipes/${recipe.id}`);
  }

}
