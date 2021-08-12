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
  zoom = 11;  

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
          // Add a geojson point source.
          // Heatmap layers also work with a vector tile source.
          (this.mapa as any).addSource('earthquakes',
              {
                  'type': 'geojson',
                  'data':
                  {
                      'type': 'FeatureCollection',
                      'features':
                          [
                              {
                                  'type': 'Feature',
                                  'geometry':
                                  {
                                      'type': 'Polygon',
                                      'coordinates': this._hm.puntos

                                  }
                              }
                          ]
                  }

              });

          (this.mapa as any).addLayer(
              {
                  'id': 'earthquakes-heat',
                  'type': 'heatmap',
                  'source': 'earthquakes',
                  'maxzoom': 9,
                  'paint': {
                      // Increase the heatmap weight based on frequency and property magnitude
                      'heatmap-weight': [
                          'interpolate',
                          ['linear'],
                          ['get', 'mag'],
                          0,
                          0,
                          6,
                          1
                      ],
                      // Increase the heatmap color weight weight by zoom level
                      // heatmap-intensity is a multiplier on top of heatmap-weight
                      'heatmap-intensity': [
                          'interpolate',
                          ['linear'],
                          ['zoom'],
                          0,
                          1,
                          9,
                          3
                      ],
                      // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                      // Begin color ramp at 0-stop with a 0-transparancy color
                      // to create a blur-like effect.
                      'heatmap-color': [
                          'interpolate',
                          ['linear'],
                          ['heatmap-density'],
                          0,'rgba(33,102,172,0)',
                          0.2,'rgb(103,169,207)',
                          0.4,'rgb(209,229,240)',
                          0.6,'rgb(253,219,199)',
                          0.8,'rgb(239,138,98)',
                          1,'rgb(178,24,43)'
                      ],
                      // Adjust the heatmap radius by zoom level
                      'heatmap-radius': [
                          'interpolate',
                          ['linear'],
                          ['zoom'],
                          0,
                          2,
                          9,
                          20
                      ],
                      // Transition from heatmap to circle layer by zoom level
                      'heatmap-opacity': {
                          default: 1,
                          stops: [
                              [14, 1],
                              [15, 0]
                          ]
                      },
                  }
              },
              'waterway-label'
          );

          (this.mapa as any).addLayer(
              {
                  'id': 'earthquakes-point',
                  'type': 'circle',
                  'source': 'earthquakes',
                  'minzoom': 7,
                  'paint': {
                      // Size circle radius by earthquake magnitude and zoom level
                      'circle-radius': [
                          'interpolate',
                          ['linear'],
                          ['zoom'],
                          7,
                          ['interpolate', ['linear'], ['get', 'mag'], 1, 1, 6, 4],
                          16,
                          ['interpolate', ['linear'], ['get', 'mag'], 1, 5, 6, 50]
                      ],
                      // Color circle by earthquake magnitude
                      'circle-color': [
                          'interpolate',
                          ['linear'],
                          ['get', 'mag'],
                          1,
                          'rgba(33,102,172,0)',
                          2,
                          'rgb(103,169,207)',
                          3,
                          'rgb(209,229,240)',
                          4,
                          'rgb(253,219,199)',
                          5,
                          'rgb(239,138,98)',
                          6,
                          'rgb(178,24,43)'
                      ],
                      'circle-stroke-color': 'white',
                      'circle-stroke-width': 1,
                      // Transition from heatmap to circle layer by zoom level
                      'circle-opacity': [
                          'interpolate',
                          ['linear'],
                          ['zoom'],
                          7,
                          0,
                          8,
                          1
                      ]
                  }
              },
              'waterway-label'
          );
      });

  }



}
