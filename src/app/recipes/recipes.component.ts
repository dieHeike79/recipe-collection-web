import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { RecipesApiService } from '../services/recipes-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public recipes =[];

  constructor(private api: RecipesApiService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.api.getRecipes().subscribe(data => {
      this.recipes = data;
      this.spinner.hide();
    })
  }

  deleteRecipe(id) {
    this.api.deleteRecipe(id).subscribe(data => _.remove(this.recipes, {id: id}));
  } 
}
