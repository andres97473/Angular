import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public loginForm: any;

  public loginSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    // this.loginForm = this.data.FORM;

    this.loginForm = this.formBuilder.group({
      email: [
        'andres@gmail.com',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      password: [
        'Ojeda2021',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
      // person: this.formBuilder.group({
      //   name: ['Andres', [Validators.required, Validators.maxLength(35)]],
      //   lastname: ['Ojeda', [Validators.required, Validators.maxLength(35)]],
      // }),
      // interests: this.formBuilder.array([
      //   this.formBuilder.control('', [
      //     Validators.required,
      //     Validators.minLength(5),
      //   ]),
      // ]),
    });
  }

  // metodo get para validar el formulario
  // get isValidForm() {
  //   return this.loginForm.email.isValid() && this.loginForm.password.isValid();
  // }

  get fm() {
    return this.loginForm.controls;
  }

  // get fp() {
  //   return this.loginForm.controls['person'].controls;
  // }

  // get interests() {
  //   return this.loginForm.get('interests') as FormArray;
  // }

  // addInterest() {
  //   this.interests.push(
  //     this.formBuilder.control('', [
  //       Validators.required,
  //       Validators.minLength(5),
  //     ])
  //   );
  // }

  // deleteInterest(i: number) {
  //   this.interests.removeAt(i);
  // }

  authenticate() {
    this.loginSubmitted = true;
    if (!this.loginForm.valid) {
      return;
    }
    //console.log(this.loginForm.value.email);
    //console.log(this.loginForm.get('password')?.value);
    console.log(this.loginForm.value);
  }
}
