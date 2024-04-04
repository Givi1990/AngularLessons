import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {

  appArray: { id: number; appName: string; appNumber: number; }[] = [
    { id: 1, appName: 'App 1', appNumber: 100 },
    { id: 2, appName: 'App 2', appNumber: 200 },
    { id: 3, appName: 'App 3', appNumber: 300 },
    { id: 4, appName: 'App 4', appNumber: 400 },
    { id: 5, appName: 'App 5', appNumber: 500 }
  ];

  constructor(private router: Router) { }

  navigateToApp(elem: any) {
    this.router.navigate(['shell/pricing/app1'], 
    { queryParams: 
      { 
        id: elem.id,
        appName: elem.appName,
        appNumber: elem.appNumber
      } 
    });
  }
}
