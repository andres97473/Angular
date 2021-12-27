import { Component, Input, OnInit } from '@angular/core';
import { GeoService } from './services/geo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'google-maps';
  center = { lat: 0.77133285, lng: -77.58750114 };
  zoom = 13;
  isChangeRadius = false;
  isChangeOpacity = false;
  isChangeGradient = false;
  radius!: number;
  opacity!: number;
  gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)',
  ];

  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
  };

  heatmapOptions: any = {};

  heatmapData: any = [];

  constructor(private _geo: GeoService) {}

  ngOnInit(): void {
    this.heatmapData = this._geo.poinst;
    this.radius = 10;
    this.opacity = 0.7;
    this.initMap();
  }

  initMap() {
    if (this.isChangeGradient) {
      console.log('gradient');
      this.heatmapOptions = {
        radius: this.radius,
        opacity: this.opacity,
        gradient: this.gradient,
      };
    } else {
      this.heatmapOptions = {
        radius: this.radius,
        opacity: this.opacity,
        gradient: null,
      };
    }
  }

  changeRadius() {
    this.isChangeRadius = !this.isChangeRadius;

    if (this.isChangeRadius) {
      this.radius = 20;
      this.initMap();
    } else {
      this.radius = 10;
      this.initMap();
    }
  }

  changeOpacity() {
    this.isChangeOpacity = !this.isChangeOpacity;

    if (this.isChangeOpacity) {
      this.opacity = 0.3;
      this.initMap();
    } else {
      this.opacity = 0.7;
      this.initMap();
    }
  }

  changeGradient() {
    this.isChangeGradient = !this.isChangeGradient;
    this.initMap();
  }
}
