import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesApiService } from '../services/recipes-api.service';
import { NgxSpinnerService }  from 'ngx-spinner'

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.css']
})
export class RecipeEditorComponent implements OnInit {

  public recipe: any = {};

  constructor( 
    private router: ActivatedRoute,
    private nav: Router,
    private api: RecipesApiService,
    private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if (params.id != 'new') {
        this.spinner.show();
        this.api.getRecipe(params.id).subscribe(data => {
          this.recipe = data;
          this.spinner.hide();
        })
      }
    })
  };

  save() {
    this.spinner.show();
    this.api.saveRecipe(this.recipe).subscribe(data => {
      this.spinner.hide();
      this.nav.navigate(['/recipes']);
    });
  }

}
