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
  function(document){
    var div = document.getElementById('container');
    var icon = document.getElementById('icon');
    var open = false;
  
    div.addEventListener('click', function(){
      if(open){
        icon.className = 'fa fa-arrow-down';  
      } else{
        icon.className = 'fa fa-arrow-down open';
      }
  
      open = !open;
    });
  }
}
