import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  isLoggedIn: boolean = false

  login(){
    this.isLoggedIn = !this.isLoggedIn
  }

  constructor() { }

  ngOnInit() {
  }

}
