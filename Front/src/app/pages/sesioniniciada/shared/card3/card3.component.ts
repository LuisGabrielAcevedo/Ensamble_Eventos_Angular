import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html'
})
export class Card3Component implements OnInit {
  @Input() datosExternos;
  @Input() styleType:string;
  @Input() ruta;
  constructor() { }

  ngOnInit() {
  }

}
