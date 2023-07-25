import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCropUploaderComponent } from './image-crop-uploader/image-crop-uploader.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [AppComponent, ImageCropUploaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageCropperModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
