import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}
  validateReferenceCode(data: any) {
    let url = this.baseUrl + '/user/validate';
    return this.http.post(url, data).toPromise();
  }
  registerUser(data: any) {
    let url = this.baseUrl + '/user/register';
    return this.http.post(url, data).toPromise();
  }
  loginUser(data: any) {
    let url = this.baseUrl + '/user/login';
    return this.http.post(url, data).toPromise();
  }
}
