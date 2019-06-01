import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html'
})
export class Card2Component implements OnInit {
  @Input() datosExternos;
  @Input() styleType:string;
  @Input() ruta;
  constructor() { }

  ngOnInit() {
  }

}
