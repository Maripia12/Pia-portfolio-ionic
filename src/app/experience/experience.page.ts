import { Component, OnInit } from '@angular/core';
import { __symbol__ } from 'zone.js/lib/zone-impl';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reactPortfolio(){
    window.open('https://maripia12.github.io/React-portfolio/#about' , '_blank' )
  }
 petApp(){
  window.open('https://mlward639.github.io/Project-One-Sassy-Pets/','_blank')
 }
 todoApp(){
  window.open('https://todo-app-react-henna-seven.vercel.app/ ', '_blank')
 }
 empPortal(){
  window.open('https://portal.materialinmotion.com/empApp/login' , '_blanck')
 }
}
