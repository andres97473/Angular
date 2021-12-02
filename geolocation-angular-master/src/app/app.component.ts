import { Component, OnInit } from "@angular/core";

import { LocationService } from "./location.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "geolocation";
  public latitude;
  public longitude;
  public isLocation = false;
  constructor(public locationService: LocationService) {}
  ngOnInit() {}
  getLocation() {
    this.locationService.getPosition().then((pos) => {
      this.latitude = pos.lat;
      this.longitude = pos.lng;
    });
    this.isLocation = true;
  }
}
