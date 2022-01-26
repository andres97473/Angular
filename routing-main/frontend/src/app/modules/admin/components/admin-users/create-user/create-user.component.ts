import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModuloPermisos, Users } from '../iadmin-users.metadata';

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
  permisos: ModuloPermisos[] = [
    {
      modulo: 'admin-user',
      permisos: [
        { id: 1, select: true, name: 'Consultar' },
        { id: 2, select: false, name: 'Adicionar' },
        { id: 3, select: false, name: 'Editar' },
        { id: 4, select: false, name: 'Eliminar' },
        { id: 5, select: false, name: 'Imprimir' },
      ],
    },
    {
      modulo: 'contact',
      permisos: [
        { id: 6, select: false, name: 'Consultar' },
        { id: 7, select: false, name: 'Adicionar' },
        { id: 8, select: false, name: 'Editar' },
        { id: 9, select: false, name: 'Eliminar' },
        { id: 10, select: false, name: 'Imprimir' },
      ],
    },
  ];

  constructor(
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
      permisos: [''],
    });
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

  ngOnInit(): void {}

  // guardar() {
  //   console.log(this.forma.value);
  // }

  cancelar() {
    this.dialogRef.close();
  }
}
