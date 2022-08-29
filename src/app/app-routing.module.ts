import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';

const routes: Routes = [
  { path:'todo-container', component: TodoContainerComponent},
  { path:'', component: AppComponent},
  { path:'**', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
