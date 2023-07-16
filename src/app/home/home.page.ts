import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  hideContainer!: boolean;
  currentStep = 0;
  input1!: string;
  input2!: string;
  input3!: string;

  next() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  submit() {
    if (this.currentStep === 3) {
      // Submit logic goes here
    }
  }
  constructor() {}

  ngOnInit(){
    const mediaQuery = window.matchMedia('(min-width: 600px)');
    this.hideContainer = mediaQuery.matches;

    mediaQuery.addEventListener('change', (event) => {
      // Update the hideContainer property based on the media query
      this.hideContainer = event.matches;
      this.currentStep = 1
    });
  }

}
