import { Component, OnInit, Inject , Output, EventEmitter, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  side: string;
  amount: string;
}

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

  loading = false;

  @Output() onApprove = new EventEmitter();
  @Input() loader = false;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<DialogsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.loader = false;
  }
  action() {
    // console.log(this.loader);
    this.onApprove.emit(this.data);
  }
}
