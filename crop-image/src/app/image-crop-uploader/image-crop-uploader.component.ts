import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-crop-uploader',
  templateUrl: './image-crop-uploader.component.html',
  styleUrls: ['./image-crop-uploader.component.scss'],
})
export class ImageCropUploaderComponent {
  selectedFile: File | null = null;

  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    if (event.objectUrl) {
      this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(
        event.objectUrl
        
        );

      // event.blob can be used to upload the cropped image
    }
    if (event.blob) {
      this.selectedFile = new File([event.blob], 'imageName.jpeg', {
        type: 'image/jpeg',
      }); // Ajusta el tipo de imagen si es necesario
    }
  }

  sendFile(): void {
    if (this.selectedFile) {

      const formData = new FormData();
      formData.append('idAlbum', '64b1e1836671cfe212376669');
      formData.append('avatar', this.selectedFile);
      formData.append('type', 'cover'); // Ajusta el tipo de imagen adecuadamente

      // Ajusta la URL para que apunte al endpoint en tu servidor que recibirá la imagen
      const url = 'http://localhost:5000/images/avatar';

      this.http.post(url, formData).subscribe(
        (response) => {
          console.log('Imagen enviada exitosamente:', response);
        },
        (error) => {
          console.error('Error al enviar la imagen:', error);
        }
      );
    }
  }
}
