import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html'
})
export class PerformancesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
