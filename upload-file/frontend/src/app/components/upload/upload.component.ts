import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  private fileTmp: any;
  private url = '';
  private extension = '';
  enviar: boolean;

  constructor(private restService: RestService) {
    this.enviar = false;
  }

  getFile($event: any): void {
    //console.log($event);
    const [file] = $event.target.files;
    //console.log(file);
    this.extension = file.name.split('.').pop();
    //console.log(this.extension);

    this.fileTmp = {
      fileRaw: file,
      fileName: file.name,
    };
  }

  sendFile(): void {
    const body = new FormData();
    body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
    // se pueden enviar mas parametros por el body
    // body.append('email', 'test@test.com');

    this.restService.sendPost(body).subscribe((res) => {
      // console.log(res.url);
      this.url = res.url;

      this.enviar = true;

      //console.log(this.url);
    });
  }

  guardarArchivo() {
    console.log(
      'Registro enviado, url:',
      this.url,
      ' extension: ',
      this.extension
    );
    this.enviar = false;
  }
}
