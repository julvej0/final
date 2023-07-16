import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email !: string
  pass !: string
  accounts: any

  constructor(private navController: NavController, private alertController: AlertController) { }

  async login() {
    if (this.email && this.pass) {
      this.accounts = JSON.parse(localStorage.getItem("accounts") || "{}")
      let data: {email: string, password: string, name?: string} = {email: this.email, password: this.pass}
      // console.log(this.accounts[0].email)
      let user = this.accounts.find((account: {name: string, email: string, password: string}) => account.email === this.email)
      if(!user){
        const alert = await this.alertController.create({
          header: "Error",
          message: "Incorrect Email or Password",
          buttons: ["OK"]
        });
        await alert.present();
      }else if(user.password !== this.pass){
        const alert = await this.alertController.create({
          header: "Error",
          message: "Incorrect Email or Password",
          buttons: ["OK"]
        });
        await alert.present();
      }else {
        data = {...data, name: user.name}
        localStorage.setItem("user", JSON.stringify(data))
        this.email = ""
        this.pass = ""
        this.navController.navigateForward("create");
      }
    } else {
      const alert = await this.alertController.create({
        header: "Error",
        message: "Please Input Email and Password.",
        buttons: ["OK"]
      });
      await alert.present();
    }
  }

  ngOnInit() {
    if(localStorage.getItem("user")){
      this.navController.navigateForward("create");
    }
  }

}
