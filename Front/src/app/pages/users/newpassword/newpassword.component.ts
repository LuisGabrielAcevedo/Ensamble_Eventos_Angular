import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-locked',
  templateUrl: './newpassword.component.html'
})
export class NewPasswordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {

  }

}
