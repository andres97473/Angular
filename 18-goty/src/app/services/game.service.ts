import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';

import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  //Arreglo creado para cargar los datos desde local storage
  private juegos:Game[]= [];

  constructor( private http: HttpClient ) { }

  getNominados(){

    if ( this.juegos.length > 0 ){

      console.log('Desde cache');
      

      return of( this.juegos );

    } else
    {

      console.log('Desde internet');

      return this.http.get<Game[]>(`${environment.url}/api/goty`)
                      .pipe(
                        tap(
                          resp => this.juegos = resp
                        )
                      );

    }    
  }

  
  votarJuegos( id: string ){

    return this.http.post(`${environment.url}/api/goty/${id}`,{})
              .pipe(
                catchError( err => {
                  return of( err.error );                  
                })
              );

  }



}
