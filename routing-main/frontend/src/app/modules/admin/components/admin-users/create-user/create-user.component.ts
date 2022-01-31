import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModuloPermisos, sexo, Users } from '../iadmin-users.metadata';
import { AdminUserService } from '../admin-user.service';

export interface ExampleTab {
  label: string;
  content: string;
}

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

  //permisos
  permisos: ModuloPermisos[] = [];

  //sexo
  sexos: any = [];

  constructor(
    private _us: AdminUserService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Users
  ) {
    this.forma = this.fb.group({
      number: [''],
      firstName: [''],
      lastName: [''],
      gender: [''],
      email: [''],
      password: [''],
      rol: [''],
      permisos: [''], //dato por defecto
    });
    this.permisos = this._us.getPermisosModulo();

    this.sexos = this._us.getSexo();

    // iniciar permisos con valores por defecto
    this.data.permisos = JSON.stringify(this.permisos);
    //console.log(this.data.permisos);
  }

  onChangePermisos($event: any, i: number) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    let modulo = this.permisos[i];

    modulo.permisos = modulo.permisos.map((d) => {
      if (d.id == id) {
        d.select = isChecked;
        return d;
      }
      return d;
    });

    this.permisos[i] = modulo;

    this.data.permisos = JSON.stringify(this.permisos);
    //console.log(this.data);
  }

  changeSexo(value: string) {
    this.data.gender = value;
    console.log(value);
  }

  ngOnInit(): void {}

  // guardar() {
  //   console.log(this.forma.value);
  // }

  cancelar() {
    this.dialogRef.close();
  }
}
