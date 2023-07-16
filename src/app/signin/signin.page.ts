import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  left: string = "show"
  center: string = "hide"
  right: string = "hide"
  rightInput: string = "show"
  prev: string = "hide"
  nex: string = "show"
  anotherPage: string = "hide"
  sub: string = "hide"
  currentStep: number = 1

  constructor(private navController: NavController) { }

  logout(){
    localStorage.removeItem("user")
    this.navController.navigateForward("login")
  }

  previous(){
    if(this.currentStep === 4){
      this.currentStep--
      this.right = "show"
      this.rightInput = "show"
      this.anotherPage = "hide"
      this.nex = "show"
      this.sub = "hide"
    }else if(this.currentStep === 3){
      this.currentStep--
      this.right = "hide"
      this.center = "show"
    }else if(this.currentStep === 2){
      this.currentStep--
      this.center = "hide"
      this.left = "show"
      this.prev = "hide"
    }
  }

  next(){
    if(this.currentStep === 1) {
      this.currentStep++
      this.left = "hide"
      this.center = "show"
      this.prev = "show"
    }else if(this.currentStep === 2){
      this.currentStep++
      this.center = "hide"
      this.right = "show"
    }else if(this.currentStep === 3){
      this.currentStep++
      this.rightInput = "hide"
      this.anotherPage = "show"
      this.nex = "hide"
      this.sub = "show"
    }
  }

  submit(){

  }

  ngOnInit() {
    this.currentStep = 1
    if(!localStorage.getItem("user")){
      this.navController.navigateForward("login")
    }
  }

}
