import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMealsComponent } from './admin/admin-meals/admin-meals.component';
import { AdministrationComponent } from './admin/administration/administration.component';
import { CookbookComponent } from './cookbook/cookbook/cookbook.component';
import { DiaryComponent } from './diary/diary/diary.component';
import { HomeComponent } from './home/home.component';
import { RecipeEditorComponent } from './recipecollection/recipe-editor/recipe-editor.component';
import { RecipesComponent } from './recipecollection/recipes/recipes.component';
import { WeekplanComponent } from './weekplan/weekplan/weekplan.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'recipes/:id', component: RecipeEditorComponent},  
  {path: 'admin', component: AdministrationComponent},  
  {path: 'admin/:meals', component: AdminMealsComponent},  
  {path: 'cookbook', component: CookbookComponent},  
  {path: 'weekplan', component: WeekplanComponent},
  {path: 'diary', component: DiaryComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
