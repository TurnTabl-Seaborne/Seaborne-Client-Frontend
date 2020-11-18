import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  constructor(private snackBar: MatSnackBar) { }

  showToast(message: string, type: string) {

    this.snackBar.open(message, 'X', {duration: 2000, verticalPosition: 'top', panelClass: [type]});

  }
}
