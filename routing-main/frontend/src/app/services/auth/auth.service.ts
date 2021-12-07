import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loginData = {
    message: '',
    permisos: '',
    rol: '',
    success: 0,
    email: '',
  };

  constructor(private router: Router, private http: HttpClient) {}

  // leer cokkie
  readCookie(name: string) {
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            '(?:(?:^|.*;)\\s*' +
              name.replace(/[\-\.\+\*]/g, '\\$&') +
              '\\s*\\=\\s*([^;]*).*$)|^.*$'
          ),
          '$1'
        )
      ) || null
    );
  }

  // seters
  setToken(token: string): void {
    //localStorage.setItem('token', token);
    document.cookie = `token=${token}`;
  }

  setRol(rol: string): void {
    // localStorage.setItem('rol', rol);
    document.cookie = `rol=${rol}`;
  }
  setPermisos(permisos: string): void {
    // localStorage.setItem('permisos', permisos);
    document.cookie = `permisos=${permisos}`;
  }
  setEmail(email: string): void {
    // localStorage.setItem('email', email);
    document.cookie = `email=${email}`;
  }

  // geters

  getToken(): string | null {
    //return localStorage.getItem('token');
    return this.readCookie('token');
  }
  getRol(): string | null {
    // return localStorage.getItem('rol');
    return this.readCookie('rol');
  }
  getPermisos(): string | null {
    // return localStorage.getItem('permisos');
    return this.readCookie('permisos');
  }
  getEmail(): string | null {
    // return localStorage.getItem('email');
    return this.readCookie('email');
  }

  // Login
  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    // eliminar cookies
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = 'rol=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = 'permisos=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC';

    // eliminar localStorage
    // localStorage.removeItem('token');
    // localStorage.removeItem('rol');
    // localStorage.removeItem('permisos');
    // localStorage.removeItem('email');

    // navigate login
    this.router.navigate(['login']);
  }

  // login({ email, password }: any): Observable<any> {
  //   if (email === 'admin@gmail.com' && password === 'admin123') {
  //     this.setToken('abcdefghijklmnopqrstuvwxyz');
  //     return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
  //   }
  //   return throwError(new Error('Failed to login'));
  // }

  loginAuth(data: any): Observable<any> {
    //console.log('I am server');

    return this.http.post(`http://localhost:4000/api/users/login`, data);
  }
}
