import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  hideContainer!: boolean;
  currentStep = 0;
  name!:string
  address!: string
  contact!:string
  twitter!: string
  facebook!: string
  discord!: string
  scope1!: string
  scope2!: string
  scope3!: string
  methodology!: string
  description!: string
  background!: string
  adviser!: string
  adviserContact!: string
  introduction!: string
  department!: string
  duration!: string
  fundNeeded!: string
  title!: string

  constructor(private navController: NavController) { }

  logout(){
    localStorage.removeItem("user")
    this.navController.navigateForward("login")
  }

  previous(){
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  next(){
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  submit(){
    
  }

  ngOnInit() {
    this.currentStep = 1
    if(!localStorage.getItem("user")){
      this.navController.navigateForward("login")
    }
    const mediaQuery = window.matchMedia('(min-width: 1430px)');
    this.hideContainer = mediaQuery.matches;

    mediaQuery.addEventListener('change', (event) => {
      // Update the hideContainer property based on the media query
      this.hideContainer = event.matches;
      this.currentStep = 1
    });
  }

}
