import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryI, CityI, CountryCityI } from '../../models/model.interface';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class DropDownComponent implements OnInit {
  public selectedCountry: CountryI = { id: 0, name: '' };
  public countries: CountryI[] = [];
  public cities: CityI[] = [];
  public citiesId: CityI[] = [];
  panelOpenState = false;

  constructor(private _countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this._countriesService.getCountries();
    //console.log(this.countries);
    this.getCountriesCities();
  }

  onSelect(event: any): void {
    const id = parseInt(event.target.value);
    //console.log(id);
    this.cities = this._countriesService
      .getCities()
      .filter((item) => item.id_country == id);
    //console.log(this.cities);
  }

  getCountriesCities(): void {
    for (let country of this.countries) {
      const nCity = this.getCitiesCountryId(country.id);
      country.cities = nCity;
      //console.log(country);
    }
  }

  getCitiesCountryId(id: number): CityI[] {
    return this._countriesService
      .getCities()
      .filter((item) => item.id_country == id);
  }
}
