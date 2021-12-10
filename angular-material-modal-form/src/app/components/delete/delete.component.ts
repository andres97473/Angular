import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<DeleteComponent>
  ) {}

  ngOnInit(): void {}

  public cancel(): void {
    // To cancel the dialog window
    this.dialogRef.close();
  }

  public cancelN(): void {
    this.dialog.closeAll();
  }
}
