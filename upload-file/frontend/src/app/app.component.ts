import { Component } from '@angular/core';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'upload-file';

  private fileTmp: any;

  constructor(private restService: RestService) {}

  getFile($event: any): void {
    //console.log($event);
    const [file] = $event.target.files;
    console.log(file);
    this.fileTmp = {
      fileRaw: file,
      fileName: file.name,
    };
  }

  sendFile(): void {
    const body = new FormData();
    body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
    body.append('email', 'test@test.com');

    this.restService.sendPost(body).subscribe((res) => console.log(res.url));
  }
}
