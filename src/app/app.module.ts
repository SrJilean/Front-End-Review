import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { PipesComponent } from './muestra/pipes/pipes.component';
// import { MainComponent } from './muestra/main/main.component';
// import { DirectivasComponent } from './muestra/directivas/directivas.component';
// import { ParametrosComponent } from './muestra/parametros/parametros.component';

import { MuestraModule } from './muestra/muestra.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MuestraModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
