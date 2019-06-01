import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html'
  
})
export class Card1Component implements OnInit {
  @Input() datosExternos;
  @Input() styleType;

  constructor() { }

  ngOnInit() {
  }

}
