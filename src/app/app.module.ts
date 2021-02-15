import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//third party imports
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";

//app imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditorComponent } from './recipe-editor/recipe-editor.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RecipesApiService } from './services/recipes-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesComponent,
    RecipeEditorComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    FormsModule,
    NgbModule,
    NgxSpinnerModule
  ],
  providers: [
    RecipesApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
