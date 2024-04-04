import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private username: string | null;
  private age: string | null;
  private eMail: string | null;
  private userHTML: string | undefined;
  private listNumber: number | undefined;
  myArray: { user: string; age: string; eMail: string; listNumber: number }[] = [];

  constructor() {
    this.username = sessionStorage.getItem('username');
    this.age = sessionStorage.getItem('age');
    this.eMail = sessionStorage.getItem('eMail');
  }

  setUsername(username: string, age: string, eMail: string, userHTML: string | undefined) {
    this.username = username;
    this.age = age;
    this.eMail = eMail;
    this.userHTML = userHTML;
    localStorage.setItem('userData', JSON.stringify({ userHTML }));
  }

  getUsername() {
    return { username: this.username, age: this.age, eMail: this.eMail, userHTML: this.userHTML };
  }

  addToMyArray(data: { user: string; age: string; eMail: string; listNumber: number ;  }) {
    let myArray = JSON.parse(localStorage.getItem('myArray') || '[]');
    myArray.push(data);
    localStorage.setItem('myArray', JSON.stringify(myArray));
  }

  getMyArray() {
    return JSON.parse(localStorage.getItem('myArray') || '[]');
  }
}
