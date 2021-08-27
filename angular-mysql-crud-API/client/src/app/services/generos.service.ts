import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Genero } from '../models/genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  API_URI = 'http://localhost:3000/api';

  constructor( private http: HttpClient ) {

   }

   getGeneros(){
    return this.http.get(`${this.API_URI}/generos`);
  }

  getOneGenero( id: string ){
    return this.http.get(`${this.API_URI}/generos/${id}`);
  }

  saveGenero( genero: Genero ){
    return this.http.post(`${this.API_URI}/generos`, genero );    
  }

  deletegame( id: string ){
    return this.http.delete(`${this.API_URI}/generos/${id}`);
  }

  updateGenero( id: string, updateGeneros: Genero ){
    return this.http.put(`${this.API_URI}/generos/${id}`, updateGeneros );
  }



}
