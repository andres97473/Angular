import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONST_LOGIN_PAGE } from '@data/constants';

@Component({
  selector: 'app-login-form, [app-login-form]',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  // constante de data
  public data = CONST_LOGIN_PAGE;
  // public loginForm;
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // this.loginForm = this.data.FORM;

    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(8),
        ],
      ],
    });
  }

  // metodo get para validar el formulario
  // get isValidForm() {
  //   return this.loginForm.email.isValid() && this.loginForm.password.isValid();
  // }

  get fm() {
    return this.loginForm.controls;
  }

  authenticate() {
    console.log('Autenticar');
  }
}
