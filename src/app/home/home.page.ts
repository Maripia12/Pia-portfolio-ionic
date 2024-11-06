import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  emailAddress:string = 'maripia1220@gmail.com'
  myNumber:string = '508-561-9945'

  constructor(
    private router: Router
  ) {}

 projects(){
  this.router.navigateByUrl('experience')
 }



}
