import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

export class ApiClass {
  public url = environment.uri;
  public isProduction = environment.production;

  constructor(public http: HttpClient) {}

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
