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
  };

  constructor(private router: Router, private http: HttpClient) {}

  // seters
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  setRol(rol: string): void {
    localStorage.setItem('rol', rol);
  }

  // geters

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getRol(): string | null {
    return localStorage.getItem('rol');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
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
