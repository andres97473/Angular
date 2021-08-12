import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

import * as Mapboxgl from 'mapbox-gl';
import { Geometry } from 'src/app/interfaces/points-response';

@Component({
  selector: 'app-mapa-heat',
  templateUrl: './mapa-heat.component.html',
  styleUrls: ['./mapa-heat.component.css']
})
export class MapaHeatComponent implements OnInit {

  mapa: Mapboxgl.Map | undefined;

  longitud = -120;
  latitud = 50;

  puntos= {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": 
    [
        { "type": "Feature", "properties": { "id": "ak16994521", "mag": 2.3, "time": 1507425650893, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -151.5129, 63.1016, 0.0 ] } },
        { "type": "Feature", "properties": { "id": "ak16994519", "mag": 1.7, "time": 1507425289659, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -150.4048, 63.1224, 105.5 ] } },
        { "type": "Feature", "properties": { "id": "ak16994517", "mag": 1.6, "time": 1507424832518, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -151.3597, 63.0781, 0.0 ] } },
        { "type": "Feature", "properties": { "id": "ci38021336", "mag": 1.42, "time": 1507423898710, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -118.497, 34.299667, 7.64 ] } },
        { "type": "Feature", "properties": { "id": "us2000b2nn", "mag": 4.2, "time": 1507422626990, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -87.6901, 12.0623, 46.41 ] } },
        { "type": "Feature", "properties": { "id": "ak16994510", "mag": 1.6, "time": 1507422449194, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -151.5053, 63.0719, 0.0 ] } },
        { "type": "Feature", "properties": { "id": "us2000b2nb", "mag": 4.6, "time": 1507420784440, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -178.4576, -20.2873, 614.26 ] } },
        { "type": "Feature", "properties": { "id": "ak16994298", "mag": 2.4, "time": 1507419370097, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -148.789, 63.1725, 7.5 ] } },
        { "type": "Feature", "properties": { "id": "nc72905861", "mag": 1.39, "time": 1507418785100, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -120.993164, 36.421833, 6.37 ] } },
        { "type": "Feature", "properties": { "id": "ci38021304", "mag": 1.11, "time": 1507418426010, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -117.0155, 33.656333, 12.37 ] } },
        { "type": "Feature", "properties": { "id": "ak16994293", "mag": 1.5, "time": 1507417256497, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -151.512, 63.0879, 10.8 ] } },
        { "type": "Feature", "properties": { "id": "ak16994287", "mag": 2.0, "time": 1507413903714, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -151.4378, 63.0933, 0.0 ] } },
        { "type": "Feature", "properties": { "id": "ak16994285", "mag": 1.5, "time": 1507413670029, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -149.6538, 63.2272, 96.8 ] } },
        { "type": "Feature", "properties": { "id": "ak16994283", "mag": 1.4, "time": 1507413587442, "felt": null, "tsunami": 0 }, "geometry": { "type": "Point", "coordinates": [ -151.5325, 63.0844, 0.0 ] } },
    ]
  };

  puntos2:Geometry[]=[];
  

  ngOnInit(): void {

    ( Mapboxgl as any ).accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapheat', // container ID
      style: 'mapbox://styles/mapbox/dark-v10', // style URL
      center: [ this.longitud, this.latitud ], // LNG, LAT
      zoom: 2
    }); 

    this.crearMarcador( this.longitud, this.latitud );   
	

    this.mapa.on('load', () => {
      // Add a geojson point source.
      // Heatmap layers also work with a vector tile source.
      (this.mapa as any).addSource('earthquakes', {
          'type': 'geojson',
          'data': this.puntos
          
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
                      0,
                      'rgba(33,102,172,0)',
                      0.2,
                      'rgb(103,169,207)',
                      0.4,
                      'rgb(209,229,240)',
                      0.6,
                      'rgb(253,219,199)',
                      0.8,
                      'rgb(239,138,98)',
                      1,
                      'rgb(178,24,43)'
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
                  'heatmap-opacity': [
                      'interpolate',
                      ['linear'],
                      ['zoom'],
                      7,
                      1,
                      9,
                      0
                  ]
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
