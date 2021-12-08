import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  // referencia al formulario, si es reactivo se hace en el ts
  forma: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forma = this.fb.group({
      id: [''],
      number: [''],
      firstname: [''],
      lastname: [''],
      rol: [''],
    });
  }

  ngOnInit(): void {}

  guardar() {
    console.log(this.forma.value);
  }
}
