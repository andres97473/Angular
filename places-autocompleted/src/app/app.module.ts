import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//g-maps
import { NgxGpAutocompleteModule } from "@angular-magic/ngx-gp-autocomplete";
import { Loader } from '@googlemaps/js-api-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    NgxGpAutocompleteModule,
  ],
  providers: [
    {
      provide: Loader,
      useValue: new Loader({
        apiKey: 'AIzaSyCS4whU4i8bVv01nqk1LZr48ABXCEkv2p8',
        libraries: ['places']
      })
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
