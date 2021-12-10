import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoComponent } from './components/demo/demo.component';
import { DeleteComponent } from './components/delete/delete.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DeleteComponent,
    AddCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
