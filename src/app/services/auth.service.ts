import { Injectable } from '@angular/core';
// import * as jwt from '../../../../api/config/config'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private setSession(authResult) {
    authResult.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1biI6Ik1heWEiLCJpYXQiOjE1ODg0OTMzNzcsImV4cCI6MTU4OTA5ODE3N30.0MHUlWQ393o2RxxpISO87OHiXxL83E__tzgSZEMYaDc'//hardcoded 

    var salt = (Math.random() * 1e32).toString(36).substring(0, 3)
    var token = authResult.token + salt;
    localStorage.setItem('_token', token);
  }

  public getToken() {
    var token = localStorage.getItem('_token');
    if (token)
      return token.slice(0, -3);
    else
      return null
  }



}
