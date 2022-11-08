import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { MainComponent } from './muestra/main/main.component';
import { DirectivasComponent } from './muestra/directivas/directivas.component';
import { ParametrosComponent } from './muestra/parametros/parametros.component';
import { PipesComponent } from './muestra/pipes/pipes.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'directivas',
    component: DirectivasComponent
  },
  {
    path: 'parametros',
    component: ParametrosComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
