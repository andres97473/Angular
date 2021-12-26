import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'google-maps';
  center = { lat: 0.77133285, lng: -77.58750114 };
  zoom = 13;
  isChangeRadius = false;
  isChangeOpacity = false;
  radius = 10;
  opacity = 0.7;

  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
  };

  heatmapOptions = {
    radius: this.radius,
    opacity: this.opacity,
  };

  heatmapData = [
    { lat: 0.779367, lng: -77.584633 },
    { lat: 0.778767, lng: -77.583517 },
    { lat: 0.779583, lng: -77.583383 },
    { lat: 0.778033, lng: -77.584 },
    { lat: 0.777867, lng: -77.584183 },
    { lat: 0.778167, lng: -77.583583 },
    { lat: 0.778167, lng: -77.583583 },
    { lat: 0.777433, lng: -77.5844 },
    { lat: 0.777833, lng: -77.585033 },
    { lat: 0.776783, lng: -77.585 },
    { lat: 0.777833, lng: -77.585 },
    { lat: 0.776783, lng: -77.585 },
    { lat: 0.777, lng: -77.585133 },
    { lat: 0.777, lng: -77.585133 },
    { lat: 0.776967, lng: -77.584767 },
    { lat: 0.776967, lng: -77.584767 },
    { lat: 0.7773, lng: -77.584533 },
    { lat: 0.777633, lng: -77.584267 },
    { lat: 0.774383, lng: -77.576583 },
    { lat: 0.774183, lng: -77.57725 },
    { lat: 0.772433, lng: -77.577533 },
    { lat: 0.772367, lng: -77.577367 },
    { lat: 0.771317, lng: -77.57915 },
    { lat: 0.773917, lng: -77.579267 },
    { lat: 0.773433, lng: -77.579133 },
    { lat: 0.774117, lng: -77.5804 },
    { lat: 0.774633, lng: -77.580883 },
    { lat: 0.77395, lng: -77.582083 },
    { lat: 0.77355, lng: -77.5826 },
    { lat: 0.7748, lng: -77.58315 },
    { lat: 0.7749, lng: -77.583383 },
    { lat: 0.774383, lng: -77.583483 },
    { lat: 0.773983, lng: -77.5838 },
    { lat: 0.773667, lng: -77.5847 },
    { lat: 0.77315, lng: -77.584783 },
    { lat: 0.772783, lng: -77.584483 },
    { lat: 0.771333, lng: -77.5855 },
    { lat: 0.771933, lng: -77.584067 },
    { lat: 0.772067, lng: -77.583483 },
    { lat: 0.772533, lng: -77.583117 },
    { lat: 0.772067, lng: -77.582333 },
    { lat: 0.770983, lng: -77.583967 },
    { lat: 0.769067, lng: -77.583533 },
    { lat: 0.7682, lng: -77.584933 },
    { lat: 0.771983, lng: -77.587533 },
    { lat: 0.771983, lng: -77.587533 },
    { lat: 0.772483, lng: -77.586467 },
    { lat: 0.772483, lng: -77.586467 },
    { lat: 0.772783, lng: -77.587783 },
    { lat: 0.773767, lng: -77.587733 },
    { lat: 0.77015, lng: -77.587817 },
    { lat: 0.77085, lng: -77.589433 },
    { lat: 0.7711, lng: -77.58315 },
    { lat: 0.769267, lng: -77.585567 },
    { lat: 0.775283, lng: -77.587733 },
    { lat: 0.775517, lng: -77.5881 },
    { lat: 0.77215, lng: -77.588 },
    { lat: 0.771833, lng: -77.58805 },
    { lat: 0.77245, lng: -77.587933 },
    { lat: 0.77195, lng: -77.588767 },
    { lat: 0.771917, lng: -77.58885 },
    { lat: 0.771867, lng: -77.589083 },
    { lat: 0.771933, lng: -77.589183 },
    { lat: 0.7718, lng: -77.589283 },
    { lat: 0.7718, lng: -77.589283 },
    { lat: 0.768917, lng: -77.587117 },
    { lat: 0.769117, lng: -77.586867 },
    { lat: 0.768767, lng: -77.58625 },
    { lat: 0.768417, lng: -77.587517 },
    { lat: 0.767933, lng: -77.587233 },
    { lat: 0.76765, lng: -77.588367 },
    { lat: 0.767833, lng: -77.588517 },
    { lat: 0.7717, lng: -77.59025 },
    { lat: 0.771483, lng: -77.590417 },
    { lat: 0.771383, lng: -77.590383 },
    { lat: 0.771183, lng: -77.590617 },
    { lat: 0.769433, lng: -77.590983 },
    { lat: 0.766233, lng: -77.591533 },
    { lat: 0.7662, lng: -77.591583 },
    { lat: 0.768133, lng: -77.5906 },
    { lat: 0.767517, lng: -77.590683 },
    { lat: 0.766817, lng: -77.589767 },
    { lat: 0.765233, lng: -77.589833 },
    { lat: 0.766567, lng: -77.590167 },
    { lat: 0.771, lng: -77.592267 },
    { lat: 0.770583, lng: -77.592433 },
    { lat: 0.770533, lng: -77.5925 },
    { lat: 0.771, lng: -77.59205 },
    { lat: 0.7718, lng: -77.591617 },
    { lat: 0.76955, lng: -77.592933 },
    { lat: 0.769717, lng: -77.593017 },
    { lat: 0.768983, lng: -77.5929 },
    { lat: 0.768767, lng: -77.59285 },
    { lat: 0.7679, lng: -77.592933 },
    { lat: 0.767333, lng: -77.593317 },
    { lat: 0.767267, lng: -77.593167 },
    { lat: 0.7671, lng: -77.59345 },
    { lat: 0.76665, lng: -77.5934 },
    { lat: 0.766367, lng: -77.592967 },
    { lat: 0.766367, lng: -77.592967 },
    { lat: 0.766467, lng: -77.592583 },
    { lat: 0.7664, lng: -77.59245 },
    { lat: 0.766283, lng: -77.5924 },
    { lat: 0.765633, lng: -77.59245 },
    { lat: 0.76565, lng: -77.59245 },
    { lat: 0.76565, lng: -77.592667 },
    { lat: 0.76535, lng: -77.593133 },
    { lat: 0.76565, lng: -77.593167 },
    { lat: 0.765733, lng: -77.593217 },
    { lat: 0.764933, lng: -77.5933 },
    { lat: 0.764183, lng: -77.593833 },
    { lat: 0.764233, lng: -77.5938 },
    { lat: 0.76405, lng: -77.5941 },
  ];

  constructor() {}

  changeRadius() {
    this.isChangeRadius = !this.isChangeRadius;

    if (this.isChangeRadius) {
      this.heatmapOptions = {
        radius: 20,
        opacity: this.opacity,
      };
    } else {
      this.heatmapOptions = {
        radius: 10,
        opacity: this.opacity,
      };
    }
  }

  changeOpacity() {
    this.isChangeOpacity = !this.isChangeOpacity;

    if (this.isChangeOpacity) {
      this.heatmapOptions = {
        radius: this.radius,
        opacity: 0.2,
      };
    } else {
      this.heatmapOptions = {
        radius: this.radius,
        opacity: 0.7,
      };
    }
  }
}
