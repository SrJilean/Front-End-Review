import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivasComponent } from './directivas/directivas.component';
import { MainComponent } from './main/main.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { PipesComponent } from './pipes/pipes.component';
import { Hijo1Component } from './parametros/hijo1/hijo1.component';
import { Hijo2Component } from './parametros/hijo2/hijo2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DirectivasComponent,
    MainComponent,
    ParametrosComponent,
    PipesComponent,
    Hijo1Component,
    Hijo2Component,
  ],
  exports: [
    DirectivasComponent,
    MainComponent,
    ParametrosComponent,
    PipesComponent,
  ],
  imports: [CommonModule, FormsModule],
  providers:[]
})
export class MuestraModule {}
