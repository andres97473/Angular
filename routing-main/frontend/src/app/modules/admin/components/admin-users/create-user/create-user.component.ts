import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../contact/user';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  // referencia al formulario, si es reactivo se hace en el ts
  forma: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.forma = this.fb.group({
      id: [''],
      number: [''],
      firstName: [''],
      lastName: [''],
      gender: [''],
      email: [''],
      rol: [''],
      permisos: [''],
    });
  }

  ngOnInit(): void {}

  // guardar() {
  //   console.log(this.forma.value);
  // }

  cancelar() {
    this.dialogRef.close();
  }
}
