import { Component, Input, OnInit } from '@angular/core';
import { Points } from './interfaces/points';
import { GeoService } from './services/geo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'google-maps';
  center!: Points;
  zoom!: number;
  isChangeRadius = false;
  isChangeOpacity = false;
  isChangeGradient = false;
  radius!: number;
  opacity!: number;
  points!: Points[];
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
    this.center = this.getCenter();
    this.zoom = 13;
    this.heatmapData = this._geo.points;
    this.radius = 10;
    this.opacity = 0.7;
    this.initMap();
  }

  getCenter(): Points {
    let items = 0;
    let sumLat = 0;
    let sumLng = 0;
    let center: Points = { lat: 0, lng: 0 };

    this.points = this._geo.points;

    items = this.points.length;
    for (const point of this.points) {
      sumLat = sumLat + point.lat;
      sumLng = sumLng + point.lng;
    }

    // console.log(sumLat / items);
    // console.log(sumLng / items);
    center = { lat: sumLat / items, lng: sumLng / items };

    return center;
  }

  initMap() {
    if (this.isChangeGradient) {
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

  changeToCenter() {
    this.center = this.getCenter();
  }
}
