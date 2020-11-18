import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


// Services
import {ToastServiceService} from '../services/toast-service.service';
import {ApiService} from '../services/api.service';
import {StorageServiceService} from '../services/storage.service';
// import custom validator to validate that password and confirm password fields match
// @ts-ignore
import { MustMatchvalidator } from '../services/must-matchvalidator';

// custom validator to check that two fields match


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  registerFormGroup: FormGroup;
  loader = false;
  welcomePage: string;
  users: any;

  constructor(private storageService: StorageServiceService, private formBuilder: FormBuilder, private apiService: ApiService, private toastService: ToastServiceService, private router: Router) {

    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.registerFormGroup = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],

      }
      , {
        validator: MustMatchvalidator('password', 'confirmPassword')

      });
  }

  ngOnInit() {
    this.welcomePage = 'login';
    this.getUser();
  }

  // convenience getter for easy access to form fields
  get registerDetails() {
    return this.registerFormGroup.controls;
  }

  get loginDetails() {
    return this.loginFormGroup.controls;
  }

  gotoLogin() {
    this.welcomePage = 'login';
  }

  gotoRegister() {
    this.welcomePage = 'register';
  }

  getUser() {
    this.apiService.getUsers().subscribe((data: any ) => {
      this.users = data;
      console.log('=====================>', this.users);
    });
  }

  login() {
    // if (this.loginFormGroup.status === 'VALID') {

      this.loader = true;
      const input = this.loginFormGroup.value;

      this.apiService.authenticateUser(input).subscribe(( data: any ) => {
        console.log(data);
        if (data.code === 202) {
          this.router.navigate(['/dashboard']);
          this.storageService.saveUserData(data);
          this.toastService.showToast('Welcome', 'success-toast');


          console.log(this.loginFormGroup.value);
        } else if (data.code === 409) {

          this.toastService.showToast('Sorry, User does not exist', 'error-toast');
          console.log(this.loginFormGroup.value);

        }
      }, error => {
        this.toastService.showToast('Please try again later', 'error-toast');
      });

  }

register() {
  // if (this.registerFormGroup.status === 'VALID') {
  this.loader = true;
  const input = this.registerFormGroup.value;
  // removeControl('confirmPassword');
  console.log(input);
  this.apiService.registerUser(input).subscribe(( data: any ) => {
    console.log(data);
    if (data.code === 201) {
      this.router.navigate(['/dashboard']);
      this.storageService.saveUserData(data);
      this.toastService.showToast('Account Registration Successful', 'success-toast');


      console.log(this.registerFormGroup.value);
    } else if (data.code === 409) {

      this.toastService.showToast('Sorry, User already exist', 'error-toast');
      console.log(this.registerFormGroup.value);

    }
  }, error => {
    this.toastService.showToast('Please try again later', 'error-toast');
  });
}




}
