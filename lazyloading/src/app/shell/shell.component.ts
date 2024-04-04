import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  username: string = '';
  // myArray: any[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    const userData = this.appService.getUsername();
    this.username = userData.username ?? localStorage.getItem('userHTML')?? '';
    

    // this.myArray = this.appService.getMyArray();
    
  }
}
