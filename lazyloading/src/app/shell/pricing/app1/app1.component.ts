import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrl: './app1.component.scss'
})
export class App1Component implements OnInit {

  constructor(private route: ActivatedRoute ){}
    id: number = 0;
    appName: string = "";
    appNumder: number = 0;

    ngOnInit(): void {
      this.route.queryParams.subscribe((e: any) => {
        this.id = e.id,
        this.appName = e.appName,
        this.appNumder = e.appNumber
      })
    }
  
}
