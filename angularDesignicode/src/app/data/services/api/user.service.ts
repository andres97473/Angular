import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICardUser } from '../../../shared/components/cards/card-user/card-user.metadata';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = environment.uri;
  public isProduction = environment.production;

  constructor(private _http: HttpClient) {}

  getAllUsers(): Observable<{
    error: boolean;
    msg: string;
    data: ICardUser[];
  }> {
    const response = {
      error: false,
      msg: 'Usuarios cargados Correctamente!',
      data: [],
    };

    return this._http.get<ICardUser[]>(this.url + '/users').pipe(
      map((r: any) => {
        response.data = r;
        return response;
      }),
      catchError(this.error)
    );
  }

  getUserById(
    id: number
  ): Observable<{
    error: boolean;
    msg: string;
    data: ICardUser[];
  }> {
    const response = {
      error: false,
      msg: '',
      data: [],
    };
    return this._http.get<ICardUser[]>(this.url + '/users/' + id).pipe(
      map((r: any) => {
        return r;
      }),
      catchError(this.error)
    );
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    return of({ error: true, msg: errorMessage, data: [] });
  }
}
