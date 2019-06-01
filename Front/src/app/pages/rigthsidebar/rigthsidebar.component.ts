import { Component, OnInit } from '@angular/core';
import { CancionesService, SidebarService } from '../../services/index.service';
import { IPlayList } from '../../models/player';
@Component({
  selector: 'app-rigthsidebar',
  templateUrl: './rigthsidebar.component.html',
  styleUrls: ['./rigthsidebar.component.css']
})
export class RigthsidebarComponent implements OnInit {
  state: string;
  myPlayList: IPlayList[];
  constructor(
    private cancionesService: CancionesService,
    public sideBarService: SidebarService
  ) { }

  ngOnInit() {
    this.cancionesService.myPLayList().subscribe(
      resp => {
        this.myPlayList = resp;
      }
    )
  }

  open() {
   this.sideBarService.openRigthSideBar()
  }
  close() {
    this.sideBarService.closeRigthSideBar();
  }

}
