import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { NavController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  isLoggedIn: boolean = false
  inSignUp: boolean = false
  name!: string

  
  constructor(private router: Router, private navController: NavController) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.inSignUp = true
        if(event.url.includes("login")){
          this.inSignUp = false
        }
        if(localStorage.getItem("user")){
          this.name = JSON.parse(localStorage.getItem("user") || "{}").name
          this.isLoggedIn = true
          this.inSignUp = false
        }else {
          this.isLoggedIn = false
        }
      }
    });
  }
  
  logout(){
    localStorage.removeItem("user")
    this.navController.navigateForward("login")
  }
  
  ngOnInit() {
  }

}
