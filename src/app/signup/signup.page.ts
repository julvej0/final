import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email!: string
  pass!: string
  confirmPass!: string
  firstName!: string
  lastName!: string

  account: {name: string, email: string, password: string}[] = [
    {
      name: "John Michael",
      email: "julve",
      password: "123"
    }
  ]

  constructor(private navController: NavController, private alertController: AlertController) { }

  async signup(){
    if(this.pass == this.confirmPass){
      if(this.email && this.pass && this.firstName && this.lastName){
        this.account.push({
          name: `${this.firstName} ${this.lastName}`,
          email: this.email,
          password: this.pass
        })
        localStorage.setItem("accounts", JSON.stringify(this.account))
        this.navController.navigateForward("login")
      }else{
        const alert = await this.alertController.create({
          header: "Error",
          message: "Please Fill Up All",
          buttons: ["OK"]
        });
        await alert.present();
      }
    }else{
      const alert = await this.alertController.create({
        header: "Wrong Password",
        message: "Rewrite it",
        buttons: ["Okay"]
      });
      await alert.present();
    }
  }

  ngOnInit() {
    localStorage.setItem("accounts", JSON.stringify(this.account))
  }

}
