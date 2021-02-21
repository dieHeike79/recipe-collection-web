import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { RecipesApiService } from 'src/app/services/recipes-api.service';

@Component({
  selector: 'app-weekplan',
  templateUrl: './weekplan.component.html',
  styleUrls: ['./weekplan.component.css']
})
export class WeekplanComponent implements OnInit {

  public weekplan = undefined;
  public weekplansLast = [];
  public itemsCount = 10;

  constructor(private api: RecipesApiService, private spinner: NgxSpinnerService ) { }

  ngOnInit(): void {
    this.spinner.show();
    
    this.api.getCurrentWeekplan().subscribe(data => {
      this.weekplan = data;
      this.spinner.hide();
    })


  }

}
