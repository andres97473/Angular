import { Component, OnInit } from '@angular/core';
import { DeleteComponent } from '../delete/delete.component';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  valor1 = 0;
  valor2 = 0;
  resultado = 0;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {}

  sumar() {
    this.resultado = this.valor1 + this.valor2;
  }
}
