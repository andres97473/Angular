import { NgxGpAutocompleteDirective, NgxGpAutocompleteOptions, NgxGpAutocompleteService } from '@angular-magic/ngx-gp-autocomplete';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'places-autocompleted';
  autocompleteInputControl: FormControl = new FormControl<string>('');
  @ViewChild('ngxPlaces') placesRef!: NgxGpAutocompleteDirective;

  options: NgxGpAutocompleteOptions = {
    componentRestrictions: { country: ['CO'] },
    // types: ['geocode']
  };

  selectAddress(place: google.maps.places.PlaceResult): void {
    // Place object from API
    console.log(place);

    // Text from input
    const addressText = this.placesRef.el.nativeElement.value;
    console.log(addressText);

    // Latitud y longitud
    if (place.geometry && place.geometry.location) {
      const latitud = place.geometry.location.lat();
      const longitud = place.geometry.location.lng();
      console.log('Latitud:', latitud);
      console.log('Longitud:', longitud);
    } else {
      console.log('No se encontró la geometría del lugar.');
    }
  }
  
}
