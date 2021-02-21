import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesApiService } from '../../services/recipes-api.service';
import { NgxSpinnerService }  from 'ngx-spinner'
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.css']
})
export class RecipeEditorComponent implements OnInit {

  public recipe: any = {};
  public sources = [];
  public loading = false;

  constructor( 
    private router: ActivatedRoute,
    private nav: Router,
    private api: RecipesApiService,
    private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
   //this.api.getSources().subscribe(data => this.sources = data);
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

 //sourcesSearch =  (text$: Observable<string>) =>
 //  text$.pipe(
 //    debounceTime(200),
 //    distinctUntilChanged(),
 //    map(term => term.length < 2 ? []
 //      : this.sources.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
 //  )

  sourcesSearch =  (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(term => this.api.searchSources(term)),
      map(sources => _.map(this.sources, 'name')),
      tap(() => this.loading = false),
  )

  sourcesFormatter = (result) => result.name;

  save() {
    this.spinner.show();
    this.api.saveRecipe(this.recipe).subscribe(data => {
      this.spinner.hide();
      this.nav.navigate(['/recipes']);
    });
  }

}
