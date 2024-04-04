import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  username: string = '';
  myArray: any[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    const userData = this.appService.getUsername();
    this.username = userData.username ?? localStorage.getItem('userHTML')?? '';
    

    this.myArray = this.appService.getMyArray();
    
  }

  convertToExcel(): void {
    console.log("btn wors");
    
    const data = this.myArray.map((elem, index) => [index + 1, elem.user, elem.age, elem.eMail]);
  
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([['#', 'Full Name', 'Age', 'e-Mail'], ...data]);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    const wbout: ArrayBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    const filename = 'List Of Members Create By Givi.xlsx';
  
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
  
}
