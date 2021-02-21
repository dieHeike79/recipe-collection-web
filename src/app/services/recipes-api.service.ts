import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesApiService {

  private baseUrl = 'https://localhost:5001/api';

  constructor(private http: HttpClient)  { }

  getRecipes() {
    return this.http.get<any[]>(`${this.baseUrl}/recipe`);
  }

  getRecipe(id) {
    return this.http.get<any>(`${this.baseUrl}/recipe/${id}`);
  }

  addRecipe(recipe: any) {
    return this.http.post(`${this.baseUrl}/recipe`, recipe);
  }

  updateRecipe(recipe: any) {
    return this.http.put(`${this.baseUrl}/recipe/${recipe.id}`, recipe);
  }

  saveRecipe(recipe: any) {
    if (recipe.id) {
      return this.updateRecipe(recipe);
    } else {
      return this.addRecipe(recipe);
    }    
  }

  deleteRecipe(recipe: any) {
    return this.http.delete(`${this.baseUrl}/recipe/${recipe.id}`);
  }

  getSources(){
    return this.http.get<any[]>(`${this.baseUrl}/source`)
  }

  searchSources(searchTerm){
    return this.http.get<any[]>(`${this.baseUrl}/sources?q=${searchTerm}`)
  }

  getDictionaryItems(groupName) {    
    return this.http.get<any[]>(`${this.baseUrl}/dictionary?groupname=${groupName}`)
  }

  getCurrentWeekplan(){
      return this.http.get<any[]>(`${this.baseUrl}/weekplan`)
  }

  getLastWeekplans(itemsCount){
    return this.http.get<any[]>(`${this.baseUrl}/weekplan?skip=${itemsCount}`)
  }

  getWeekplan(id){
    return this.http.get<any[]>(`${this.baseUrl}/weekplan?id=${id}`)
  }
}
