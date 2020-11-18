import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {
  userRole: any;
  private localStorage: any;

  constructor(private router: Router) {

  }

  saveUserData(data: any) {
    const userData =  JSON.stringify(data);
    localStorage.setItem('userObj', userData);
    console.log(userData);
  }

  getData() {
    const userData = localStorage.getItem('userObj');
    return JSON.parse(userData);
  }

  loggedIn(): boolean {
    const userData = localStorage.getItem('userObj');
    if (userData) {
      return true;
    } else {
      return false;
    }
  }


  logout() {
    localStorage.deleteItem('userObj');
    this.router.navigate(['/login']);
  }
}
