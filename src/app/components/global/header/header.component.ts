import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public check: boolean;

  constructor(
    private router: Router
  ) {
      this.check = false;
   }

  burguerActive(){
    if(!this.check){
      this.check = true;
    }
  }

  burguerDisabled(){
    if(this.check){
      this.check = false;
    }
  }
}
