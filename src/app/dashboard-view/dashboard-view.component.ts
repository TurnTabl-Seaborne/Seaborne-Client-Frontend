// CORE
import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';

// MATERIAL
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


// MODELS

// SERVICES

import {ToastServiceService} from '../services/toast-service.service';
import {MatDialog} from '@angular/material';
import {DialogsComponent} from '../dialogs/dialogs.component';





declare var $: any;

export interface ClientDashboardData {
  name: string;
  position: number;
  amount: number;
  side: string;
  state: string;
  status: string;
  createdDate: string;
  marketValue: string;
}

const ELEMENT_DATA: ClientDashboardData[] = [
  {position: 1, name: 'IBM', amount: 1.0079, side: 'BUY', state: 'FAILED', status: 'NONE', createdDate: '12-06-2019', marketValue: '0.567'},
  {position: 2, name: 'Googl', amount: 4.0026, side: 'BUY',  state: 'FAILED', status: 'NONE', createdDate: '12-06-2019', marketValue: '0.567'},
  {position: 3, name: 'Msft', amount: 6.941, side: 'SELL',  state: 'FAILED', status: 'NONE',  createdDate: '12-06-2019', marketValue: '0.567'},
  {position: 4, name: 'Nflx', amount: 9.0122, side: 'SELL',  state: 'FAILED', status: 'NONE',  createdDate: '12-06-2019', marketValue: '0.567'},
  {position: 3, name: 'Aapl', amount: 6.941, side: 'SELL',  state: 'FAILED', status: 'NONE',  createdDate: '12-06-2019', marketValue: '0.567'},
  {position: 4, name: 'Tsla', amount: 9.0122, side: 'BUY', state: 'FAILED', status: 'NONE',  createdDate: '12-06-2019', marketValue: '0.567'},
  {position: 3, name: 'Amzn', amount: 6.941, side: 'SELL', state: 'FAILED', status: 'NONE',  createdDate: '12-06-2019', marketValue: '0.567'},
  {position: 4, name: 'Orcl', amount: 9.0122, side: 'SELL', state: 'FAILED', status: 'NONE',  createdDate: '12-06-2019', marketValue: '0.567'}
];




@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {
  initials: any;
  initialValue: any;
  revenue: any;
  spent: any;
  value: any;
  profit: any;

  name: string;


  displayedColumns: string[] = [ 'position', 'name', 'amount', 'side', 'state', 'status', 'createdDate', 'marketValue', 'appId'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog, private toastService: ToastServiceService, private router: Router, private _formBuilder: FormBuilder) {


  }


  ngOnInit() {
    // this.getRandomColor();
    this.getUserData();

  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  deletePortfolio(){
    //delete portfolio api integration
  }
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    $('.initials-header').css('background-color', color);

  }

  getUserData() {
    // const data = this.storageServiceService.getData();
    this.initials = 'DE';
    this.initialValue = 4000;
    this.revenue = 8000;
    this.spent = 700;
    this.value = 70;
    this.profit = 5000;

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogsComponent, {
      height: '400px',
      width: '450px',
      data: {side: '', amount: ''}
    });

    dialogRef.componentInstance.onApprove.subscribe(result => {
      dialogRef.componentInstance.loader = true;
      console.log('The dialog was closed');
      // this.side = result.side;
      // this.amount = result.amount;
    });
  }

  logout() {
    // this.storageServiceService.logout();
    this.router.navigate(['/login']);
  }




}

