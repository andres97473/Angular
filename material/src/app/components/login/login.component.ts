import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    console.log(usuario);
    console.log(password);

    if (usuario == 'andres' && password == '123456') {
      console.log('Login con exito');
      this.fakeLoading();
    } else {
      //console.log('Error de autenticacion');
      this.error();
      this.form.reset();
    }
  }

  error() {
    this._snackBar.open(
      'Usuario o Contraseña ingresados son invalidos',
      'Cerrar',
      {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      }
    );
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
