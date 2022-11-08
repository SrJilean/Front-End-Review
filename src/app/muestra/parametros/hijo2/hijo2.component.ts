import { Component, Input } from '@angular/core';
import { ServiceMuestraService } from '../../../services/service-muestra.service';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styles: [
  ]
})
export class Hijo2Component {

  @Input() public textoHijo1: string = '';
  @Input() public textoHijo2: string = '';
  get textoHijo3(){
    return this.service.textoHijo3;
  }

  constructor(private service:ServiceMuestraService) { }


}
