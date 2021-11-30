import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users, IAdminUsers } from './iadmin-users.metadata';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminUserService {
  constructor(private http: HttpClient) {}

  getAdminUsers(): Observable<any> {
    return this.http.get(`http://localhost:4000/api/users`).pipe(
      map((resp: any) => {
        return resp.data;
      })
    );
  }
}
