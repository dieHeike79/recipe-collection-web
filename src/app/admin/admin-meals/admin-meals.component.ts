import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { RecipesApiService } from '../../services/recipes-api.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-admin-meals',
  templateUrl: './admin-meals.component.html',
  styleUrls: ['./admin-meals.component.css']
})
export class AdminMealsComponent implements OnInit {

  public meals =[];

  constructor(private api: RecipesApiService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.api.getDictionaryItems('meal').subscribe(data => {
      this.meals = data;
      this.spinner.hide();
    })

  }

}
