import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('username', { static: true }) username!: ElementRef<HTMLInputElement>;
  @ViewChild('age', { static: true }) age!: ElementRef<HTMLInputElement>;
  @ViewChild('eMail', { static: true }) eMail!: ElementRef<HTMLInputElement>;

  @Output() userData: EventEmitter<{ username: string }> = new EventEmitter();
  
  myArray: { user: string; age: string; eMail: string; listNumber: number }[] = [];
  listNumber: any;
  

  constructor(private loginRoutes: Router, 
              private appService: AppService) {}

  ngOnInit(): void {
  }

  routeToShell(): void {
    const username = this.username.nativeElement.value;
    const age = this.age.nativeElement.value;
    const eMail = this.eMail.nativeElement.value;
    
    if (!username || !age || !eMail) {
      
      alert('შეავსეთ ველა ველი');
      return;
    }

    
  
  
    let listNumber = this.incrementListNumber();

    
    
    
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('age', age);
    sessionStorage.setItem('eMail', eMail);
    sessionStorage.setItem("listNumber", listNumber.toString())

    this.appService.setUsername(username, age, eMail, username);
    this.userData.emit({ username });
  
    this.appService.addToMyArray({ user: username, age, eMail, listNumber});

    this.loginRoutes.navigate(['./shell'], { 
      queryParams: { 
        username: username, 
        age: age, 
        eMail: eMail 
      } 
    });
  }

  private incrementListNumber(): number {
    let listNumber = parseInt(localStorage.getItem('listNumber') || '0', 10) + 1;
    localStorage.setItem('listNumber', listNumber.toString());
    return listNumber;
  }
}
