import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this._auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      this._auth.loginAuth(this.loginForm.value).subscribe(
        (result) => {
          if (result.success == 0) {
            //console.log(result);
            Swal.fire(result.data);
          } else {
            this._auth.setToken(result.token);
            this._auth.setRol(result.rol);
            this.router.navigate(['/admin']);
            this._auth.loginData = {
              message: result.message,
              permisos: result.permisos,
              rol: result.rol,
              success: result.success,
            };
            console.log(this._auth.loginData);
          }
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
