import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceMuestraService } from '../../../services/service-muestra.service';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styles: [
  ]
})
export class Hijo1Component{

  @Output()
  enviar: EventEmitter<string> =  new EventEmitter<string>();
  textoHijo1: string = '';
  textoHijo2: string = '';
  textoHijo3: string = '';

  constructor(
    private service: ServiceMuestraService
    ) { }

  enviarMensaje(){
    this.enviar.emit(this.textoHijo1);
  }

  enviarMensaje2(){
    this.enviar.emit(this.textoHijo1);
  }

  enviarMensaje3(){
    this.service.setTextoHijo(this.textoHijo3);
  }

}
