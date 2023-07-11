import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email !: string
  pass !: string

  constructor(private navController: NavController, private alertController: AlertController) { }

  async login() {
    if (this.email && this.pass) {
      this.navController.navigateForward("create");
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
  }

}
