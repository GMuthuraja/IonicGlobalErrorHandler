import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  clientToken: any;
  items = {
    id: "a",
    name: "b"
  };
  keyArray: any;
  valueArray: any;
  keyvalueArray = [];

  constructor() {

    this.keyArray = Object.keys(this.items); //returns only keys
    this.valueArray = Object.values(this.items); //returns only values
    this.keyvalueArray = Object.entries(this.items)[0]; //returns array of key, value


    /* Type of Errors */
    // TypeError: Cannot read property 'item' of undefined
    // Error: Cannot match any routes. URL Segment: 'home'
    // TypeError: _co.submit is not a function
    // NullInjectorError: No provider for SplashScreen!
    // Error: Cannot find a differ supporting object '[object Object]' of type 'object'
    // Error: Template parse errors: Can't bind to 'enabled' since it isn't a known property of 'ion-button' 
  
    /* Warning */
    //Native: tried calling StatusBar.styleDefault, but Cordova is not available. Make sure to include cordova.js or run in a device/simulator
  }

}
