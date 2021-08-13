import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa-home',
  templateUrl: './mapa-home.component.html',
  styleUrls: ['./mapa-home.component.css']
})
export class MapaHomeComponent implements OnInit {

  mapa: Mapboxgl.Map | undefined;

  longitud = -77.57292232200311;
  latitud = 0.8068493949669744;


  ngOnInit(): void {

    ( Mapboxgl as any ).accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [ this.longitud, this.latitud ], // LNG, LAT
      zoom: 16.6
    }); 

    // controls
    (this.mapa as any).addControl(new Mapboxgl.NavigationControl());

    this.crearMarcador( this.longitud, this.latitud );

  }

  
  crearMarcador(lng: number, lat: number ){

    const marker = new Mapboxgl.Marker({
      draggable: true
      }).setLngLat([ lng, lat ])
        .addTo( (this.mapa as any ) );

    marker.on('dragend', () => {
      console.log( marker.getLngLat() );
      
    });

  }

}
