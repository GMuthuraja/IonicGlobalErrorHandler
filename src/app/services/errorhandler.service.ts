import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ErrorhandlerService implements ErrorHandler {

  constructor() { }

  handleError(error){
    console.log(error);
  }
}
