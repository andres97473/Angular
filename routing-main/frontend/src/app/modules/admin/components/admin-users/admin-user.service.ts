import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users, IAdminUsers } from './iadmin-users.metadata';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../../../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminUserService {
  headers = new HttpHeaders();
  token = this.authService.getToken();

  constructor(private http: HttpClient, private authService: AuthService) {
    //console.log(this.token);
  }

  getAdminUsers(): Observable<any> {
    //this.headers.append('Authorization', 'dadadasdawdasd');
    //console.log(this.headers);

    return this.http
      .get(`http://localhost:4000/api/users`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .pipe(
        map((resp: any) => {
          return resp.data;
        })
      );
  }

  agregarUser() {}
}
