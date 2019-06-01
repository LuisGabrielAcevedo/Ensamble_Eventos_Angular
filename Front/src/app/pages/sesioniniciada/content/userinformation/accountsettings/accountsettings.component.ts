import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html'
})
export class AccountSettingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
