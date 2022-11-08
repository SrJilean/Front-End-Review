import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html'
})
export class PipesComponent {

  public textoPrueba: string = '';
  public terminoSlice: number = 0;
  public terminoNumber: string = '1.0-30';

  constructor() { }

}
