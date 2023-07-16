import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoggedIn = new EventEmitter<void>()

  login(){
    this.userLoggedIn.emit()
  }

  constructor() { }
}
