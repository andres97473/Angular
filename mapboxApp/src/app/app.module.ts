import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapaHomeComponent } from './components/mapa-home/mapa-home.component';
import { MapaHeatComponent } from './components/mapa-heat/mapa-heat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapaHomeComponent,
    MapaHeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
