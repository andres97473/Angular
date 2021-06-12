import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  
  constructor( private http: HttpClient ) { 

    console.log('Spotify service listo');
  }

  getQuery( query: string ){
    const TOKEN = 'BQBG2dHFmq4cIRgkUcAxMSfFylHkWiySqm1LGfDgUJZMHjY69Kmw1TCkZKUehQCe2J0qPf1FF0P3Or5j-nM';
    const url  = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':`Bearer ${TOKEN}` 
    });

    return this.http.get(url,{headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
                .pipe( map( (data : any) => data.albums.items ));

  }

  getArtistas( termino:string ){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe( map( (data : any) => data.artists.items));

  }
  
  getArtista( id:string ){

    return this.getQuery(`artists/${id}`);
                // .pipe( map( (data : any) => data.artists.items));

  }

  getArtistaTopTracks( id:string ){
  
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe( map( (data : any) => data.tracks));
  
  }

}
