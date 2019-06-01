import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IPlayList } from '../../../models/player';
import { PlayerSandbox } from '../../../sandBox/player.sandBox';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() playList: IPlayList[];
  cancioActual: any;
  subscriptions: Subscription[] = [];
  constructor(
    private playerSandBox: PlayerSandbox
  ) {
  }

  ngOnInit() {
    this.agregarAcordeon();
    //console.log(this.playList);
    this.subscriptions.push(
      this.playerSandBox.fetchCancionActual()
        .subscribe(cancion => {
          this.cancioActual = cancion;
        })
    )
  }

  agregarAcordeon() {
    // let acordeon = document.getElementById('agregarAcordeon');
    // for (let list of this.playList) {
    //   acordeon.innerHTML += `
    //     <div id="accordion">
    //         <div class="click" id="heading${list.nombre}" style="padding: 4px;background: #007bff;color: white; text-align: center; font-size: 14px;">
    //           <h4 style="margin: 0px" data-toggle="collapse" data-target="#collapse${list.nombre}" aria-expanded="false" aria-controls="collapse${list.nombre}">
    //             ${list.nombre}
    //           </h4>
    //         </div>
    //         <div id="collapse${list.nombre}" class="collapse" aria-labelledby="heading${list.nombre}" data-parent="#accordion" style="padding: 10px 0px;">
    //           <div class="click" id="${list.nombre}">
    //           </div>
    //         </div>
    //     </div>
    //   `
    //   let y = 1;
    //   let cancionesAcordeon = document.getElementById(`${list.nombre}`);
    //   for (let cancion of list.canciones) {
    //     cancionesAcordeon.innerHTML += `
    //       <div style="overflow: hidden; font-size: 14px;" (click)="playSong(${y},${list})" [ngStyle]="controlCancion(${cancion})" >
    //           <p style="float: left; margin: 0px; padding-left: 5px;">${y}. ${cancion.nombre}</p>
    //           <p style="float: right; margin: 0px; padding-right: 10px;">${cancion.duracion}</p>
    //       </div>
    //       `
    //     y++;
    //   }
    // }
  }
  playSong(numero: number, playList: IPlayList) {
    console.log('aqui')
    playList.numeroInicio = numero;
    this.playerSandBox.newPlayList(playList);
  }
  controlCancion(cancion: any) {
    if (this.cancioActual && cancion._id == this.cancioActual._id) {
      return {
        'background': '#007bff',
        'color': 'white'
      }
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
