import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeResponse } from '../models/youtube.models';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyDdUDXT1sGaCPb7mhpwpH_arz23w8fCazY';
  private playList = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor( private http: HttpClient ) {     
    
  }

  getVideos(){

    const url = `${ this.youtubeUrl }/playlistItems`;

    const nParams = new HttpParams()
                      .set('part','snippet')
                      .set('maxResults','10')
                      .set('playlistId', this.playList)
                      .set('key', this.apiKey)
                      .set('pageToken', this.nextPageToken);

    return this.http.get<YoutubeResponse>( url, { params: nParams } )
               .pipe( 
                 map( resp =>{
                   this.nextPageToken = resp.nextPageToken;
                   return resp.items;
                 }),
                 map( items =>{
                   // utilizo el map de los arreglos
                   return items.map( video => video.snippet );

                 } )
               );

  }


}
