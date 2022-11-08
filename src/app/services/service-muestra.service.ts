import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceMuestraService {

  private _textoHijo3: string = '';

  get textoHijo3():string{
    return this._textoHijo3;
  }

  constructor() { }

  public setTextoHijo(mensaje: string): void{
    this._textoHijo3 = mensaje;
  }
}
