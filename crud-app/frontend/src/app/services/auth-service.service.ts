import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    console.log('I am server');

    return this.http.post(`http://localhost:4000/api/users/login`, data);
  }
}
