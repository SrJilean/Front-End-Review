import { AfterViewInit, Component, OnChanges, ViewChild } from '@angular/core';
import { Hijo1Component } from './hijo1/hijo1.component';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styles: [
  ]
})
export class ParametrosComponent{

  @ViewChild(Hijo1Component) child: any;

  public textoHijo1: string = '';
  public textoHijo2: string = '';

  constructor() { }

  recibirMensaje1(mensaje: string): void{
    this.textoHijo1 = mensaje;
  }

  recibirMensaje2():void{
    this.textoHijo2 = this.child.textoHijo2;
  }

}
