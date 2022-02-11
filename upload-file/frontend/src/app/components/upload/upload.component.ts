import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { FileCategoryI } from '../../models/file.interface';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  public formGroup!: FormGroup;

  private fileTmp: any;
  private url = '';
  private extension = '';
  enviar: boolean;

  // files categories

  public filesCategories: FileCategoryI[] = [];

  constructor(
    private restService: RestService,
    private formBuilder: FormBuilder
  ) {
    this.enviar = false;
  }

  ngOnInit(): void {
    this.getFilesCategories();
    this, this.buildForm();
  }

  private buildForm() {
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    const name = 'JOHN DOE';
    const minPassLength = 4;
    this.formGroup = this.formBuilder.group({
      registeredOn: today,
      name: [name.toLowerCase(), Validators.required],
      email: ['john@angular.io', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(minPassLength)],
      ],
    });
  }

  public register() {
    const user = this.formGroup.value;
    console.log(user);
  }

  getFilesCategories(): FileCategoryI[] {
    this.restService.getFilesCategories().subscribe((res) => {
      console.log(res.data);
      this.filesCategories = res.data;
    });
    return this.filesCategories;
  }

  setCategoryId(id: number) {
    console.log(id);
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
