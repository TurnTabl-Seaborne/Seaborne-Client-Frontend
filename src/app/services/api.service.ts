import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'localhost:8080/api/';
  private registerUrl = `${this.baseUrl}signup`;
  private loginUrl = `${this.baseUrl}signin`;
  private getUsersUrl = `${this.baseUrl}users`;

  private httpHeaders  = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
    .set(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    .set('Cache-Control', 'no-cache');



  constructor(private http: HttpClient) { }

  private requestHeaders = {
    headers: this.httpHeaders
  };

  registerUser(data: any) {
    console.log('------------->', data);
    return this.http.post(this.registerUrl, data, this.requestHeaders);
  }
  authenticateUser(data: any) {
    return this.http.post(this.loginUrl, data, this.requestHeaders);
  }
  getUsers() {
    return this.http.get(this.getUsersUrl, this.requestHeaders);
  }
}
