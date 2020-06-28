import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelsComponent } from './components/models/models.component';
import { ModelItemComponent } from './components/model-item/model-item.component';


const routes: Routes = [
  { path: '', component: ModelsComponent },
  { path: 'modelItem/:id', component: ModelItemComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
