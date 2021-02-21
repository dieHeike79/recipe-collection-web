import { NgModule, enableProdMode } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
enableProdMode();
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//third party imports
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";

//app imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipecollection/recipes/recipes.component';
import { RecipeEditorComponent } from './recipecollection/recipe-editor/recipe-editor.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RecipesApiService } from './services/recipes-api.service';
import { AdministrationComponent } from './admin/administration/administration.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminMealsComponent } from './admin/admin-meals/admin-meals.component';
import { CookbookComponent } from './cookbook/cookbook/cookbook.component';
import { WeekplanComponent } from './weekplan/weekplan/weekplan.component';
import { DiaryComponent } from './diary/diary/diary.component';
import { WeekplanEditComponent } from './weekplan/weekplan-edit/weekplan-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesComponent,
    RecipeEditorComponent,
    NavMenuComponent,
    AdministrationComponent,
    AdminSidebarComponent,
    AdminMealsComponent,
    CookbookComponent,
    WeekplanComponent,
    DiaryComponent,
    WeekplanEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    FormsModule,
    NgbModule,    
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    RecipesApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
