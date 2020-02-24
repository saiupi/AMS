import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {
  results: Object;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://192.168.3.235:3000/api/services/get").subscribe((res)=>{
      this.results=res;
      console.log("111",this.results)
    })
  
  }

}
