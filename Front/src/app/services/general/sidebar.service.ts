import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  stateRigth:string='hide-rside';
  stateLeft:string;
  
  constructor() { }
  openRigthSideBar(){
    this.stateRigth='shw-rside';
  }
  closeRigthSideBar(){
    this.stateRigth= 'hide-rside';
  }
  openLeftSideBar(){
    this.stateLeft='show-left-sidebar';
  }
  closeLeftSideBar(){
    this.stateLeft='hide-left-sidebar';
  }
}
