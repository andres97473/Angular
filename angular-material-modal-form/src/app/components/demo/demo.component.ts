import { Component, OnInit } from '@angular/core';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '640px',
      disableClose: true,
    });
  }
}
