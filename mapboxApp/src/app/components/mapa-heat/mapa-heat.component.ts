import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

import * as Mapboxgl from 'mapbox-gl';
import { Geometry } from 'src/app/interfaces/points-response';
import { HeatMapService } from '../../services/heat-map.service';

@Component({
  selector: 'app-mapa-heat',
  templateUrl: './mapa-heat.component.html',
  styleUrls: ['./mapa-heat.component.css']
})
export class MapaHeatComponent implements OnInit {

  mapa: Mapboxgl.Map | undefined;

  longitud = -77.58750114;
  latitud = 0.77133285;
  zoom = 13;

  // color mapa de calor
  hmColor:Array<string[] | number | string>=
      [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
          0,'rgba(33,102,172,0)',
          0.2,'rgb(103,169,207)',
          0.4,'rgb(209,229,240)',
          0.6,'rgb(253,219,199)',
          0.8,'rgb(239,138,98)',
          1,'rgb(178,24,43)'
    
      ];
  
  // color blanco y azul
  hmColor2:Array<string[] | number | string>=
      [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
          0, 'rgba(236,222,239,0)',
          0.2, 'rgb(208,209,230)',
          0.4, 'rgb(166,189,219)',
          0.6, 'rgb(103,169,207)',
          0.8, 'rgb(28,144,153)'
    
      ];

  // color mapa de calor con amarillos y verdes
  hmColor3:Array<string[] | number | string>=
  [
    'interpolate',
    ['linear'],
    ['heatmap-density'],
      0,'rgba(236,222,239,0)',
                          
      0.2,'rgb(0, 255, 0)',
      0.4,'rgb(100, 255, 0)',
      0.6,'rgb(255, 255, 0)',
      0.8,'rgb(127, 127, 0)',
      1,'rgb(255, 0, 0)'
  ];
  

  constructor( private _hm : HeatMapService ){

  }
  

  ngOnInit(): void {

    ( Mapboxgl as any ).accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapheat', // container ID
      style: 'mapbox://styles/mapbox/dark-v10', // style URL
      center: [ this.longitud, this.latitud ], // LNG, LAT
      zoom: this.zoom      
      
    });    
    
	

      this.mapa.on('load', () => {

        // controls
        (this.mapa as any).addControl(new Mapboxgl.NavigationControl());


          // Add a geojson point source.
          // Heatmap layers also work with a vector tile source.
          (this.mapa as any).addSource('earthquakes',
              {
                  'type': 'geojson',
                  'data': this._hm.geoJson
                  // homologar GeoJsonpara pasar solo las coordenadas
                  // {
                  //     'type': 'FeatureCollection',
                  //     'features':
                  //         [
                  //             {
                  //                 'type': 'Feature',
                  //                 'geometry':
                  //                 {
                  //                     'type': 'Polygon',
                  //                     'coordinates': this._hm.puntos

                  //                 }
                  //             }
                  //         ]
                  // }

              });

          (this.mapa as any).addLayer({
            'id': 'earthquakes-heat',
            'type': 'heatmap',
            'source': 'earthquakes',
            'maxzoom': 15,
            'paint': {
              // increase weight as diameter breast height increases
              'heatmap-weight': {
                'property': 'dbh',
                'type': 'exponential',
                'stops': [
                  [1, 0],
                  [62, 1]
                ]
              },
              // increase intensity as zoom level increases
              'heatmap-intensity': {
                'stops': [
                  [11, 1],
                  [15, 3]
                ]
              },
              // assign color values be applied to points depending on their density
              'heatmap-color': this.hmColor3,
              // increase radius as zoom increases
              'heatmap-radius': {
                'stops': [
                  [11, 15],
                  [15, 20]
                ]
              },
              // decrease opacity to transition into the circle layer
              'heatmap-opacity': {
                'default': 1,
                'stops': [
                  [14, 1],
                  [15, 0]
                ]
              },
            }
          }, 'waterway-label');

          // circulos

          (this.mapa as any).addLayer({
            'id': 'earthquakes-point',
            'type': 'circle',
            'source': 'earthquakes',
            'minzoom': 14,
            'paint': {
              // increase the radius of the circle as the zoom level and dbh value increases
              'circle-radius': {
                'property': 'dbh',
                'type': 'exponential',
                'stops': [
                  [{ 'zoom': 15, 'value': 1 }, 5],
                  [{ 'zoom': 15, 'value': 62 }, 10],
                  [{ 'zoom': 22, 'value': 1 }, 20],
                  [{ 'zoom': 22, 'value': 62 }, 50],
                ]
              },
              'circle-color': {
                'property': 'dbh',
                'type': 'exponential',
                'stops': [
                  [0, 'rgba(236,222,239,0)'],
                  [10, 'rgb(236,222,239)'],
                  [20, 'rgb(208,209,230)'],
                  [30, 'rgb(166,189,219)'],
                  [40, 'rgb(103,169,207)'],
                  [50, 'rgb(28,144,153)'],
                  [60, 'rgb(1,108,89)']
                ]
              },
              'circle-stroke-color': 'white',
              'circle-stroke-width': 1,
              'circle-opacity': {
                'stops': [
                  [14, 0],
                  [15, 1]
                ]
              }
            }
          }, 'waterway-label');

          
        });
        
        // interactividad con los circulos
        (this.mapa as any).on('click', 'earthquakes-point', (e:any)=> {
            // console.log(e);            
          new Mapboxgl.Popup()
          
            .setLngLat(e.lngLat)
            .setHTML('<b>ID: </b> ' + e.features[0].properties.id + ' ' + e.features[0].properties.name )
            .addTo((this.mapa as any));
        });

  }



}
