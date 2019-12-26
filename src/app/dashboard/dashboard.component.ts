import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toggled = false;
  slideOpen: any = false;

  onToggle(){
    
  }
    changeSlide(): void {
      this.toggled = !this.toggled;
      this.slideOpen = !this.slideOpen;
  }
 
}
