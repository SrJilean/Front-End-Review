import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styles: [],
})
export class DirectivasComponent {
  public cantidad: number = 0;
  public directiva: string = 'false';
  public correo: string[] = [];

  validar(i: number): string {
    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if(expReg.test(this.correo[i])){
      return 'valido'
    }
    return 'noValido';
  }
}
