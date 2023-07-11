import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    AppRoutingModule,
    
  ],
  exports: [HeaderComponent]
})
export class SharedComponentsModule { }
