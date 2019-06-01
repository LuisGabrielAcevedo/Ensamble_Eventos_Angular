import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarService, LocalStorageService, BuscadorService } from '../../../../services/index.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserSandbox } from '../../../../sandBox/user.sandBox';
import { IUsuario } from '../../../../models/usuario';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  user:IUsuario = null;
  subscriptions: Subscription[] = [];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    public _sidebar: SidebarService,
    public localStorageService: LocalStorageService,
    private userSandBox : UserSandbox,
    public _buscador: BuscadorService
    
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.userSandBox.fetchIdentity()
      .subscribe(identity=>{
        this.user=identity;
      })
    )
  }

  buscar(value){
    this._router.navigate(['/other','search',value]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
