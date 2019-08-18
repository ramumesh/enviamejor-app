import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  setPhoneNumber(phoneNumber) {
    localStorage.setItem('phoneNumber', phoneNumber);
  }
  getPhoneNumber() {
    return localStorage.getItem('phoneNumber');
  }
  setVerified() {
    localStorage.setItem('isVerified', 'true');
  }
  setRegistered() {
    localStorage.setItem('isRegistered', 'true');
  }
  setLoggedIn() {
    localStorage.setItem('isLoggedIn', 'true');
  }
  isRegistered() {
    return localStorage.getItem('isRegistered');
  }
  isLoggedIn() {
    return localStorage.getItem('isLoggedIn');
  }
  isVerified() {
    return localStorage.getItem('isVerified');
  }
  setLoggedOut() {
    localStorage.removeItem('isLoggedIn');
  }
}
