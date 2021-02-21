import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { RecipesApiService } from 'src/app/services/recipes-api.service';

@Component({
  selector: 'app-weekplan-edit',
  templateUrl: './weekplan-edit.component.html',
  styleUrls: ['./weekplan-edit.component.css']
})
export class WeekplanEditComponent implements OnInit {

  public weekplanId = 0;
  public weekplan = {};

  constructor(private api: RecipesApiService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {


    if (this.weekplanId != 0)
    {
      this.spinner.show();
      this.api.getWeekplan(this.weekplanId).subscribe(data => {
        this.weekplan = data;
        this.spinner.hide();
      })
    }
  }

  save() {
    
  }

}
