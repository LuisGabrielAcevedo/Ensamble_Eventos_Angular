import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../../../services/index.service';

@Component({
  selector: 'app-myplaylists',
  templateUrl: './myplaylists.component.html',
  styleUrls: ['./myplaylists.component.css']
})
export class MyplaylistsComponent implements OnInit {

  constructor(
    public sideBarService: SidebarService
  ) { }

  ngOnInit() {
  }

  buscar() {
    
  }

  open() {
    this.sideBarService.openRigthSideBar()
   }
}

