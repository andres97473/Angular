import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { FileCategoryI, FileI } from '../../models/file.interface';
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

  private file: FileI = { file_name: '' };
  private fileTmp: any;

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
    this.formGroup = this.formBuilder.group({
      id_category: ['', Validators.required],
      file_name: ['', Validators.required],
      url: [''],
      extension: [''],
    });
  }

  public register() {
    let user = this.formGroup.value;
    user.url = this.file.url;
    user.extension = this.file.extension;
    //console.log(user);

    this.restService.sendPostFiles(user).subscribe((res) => {
      //console.log(res);
    });
    this.enviar = false;
  }

  getFilesCategories(): FileCategoryI[] {
    this.restService.getFilesCategories().subscribe((res) => {
      //console.log(res.data);
      this.filesCategories = res.data;
    });
    return this.filesCategories;
  }

  getFile($event: any): void {
    //console.log($event);
    const [file] = $event.target.files;
    //console.log(file);
    this.file.extension = file.name.split('.').pop();
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
      this.file.url = res.url;

      this.enviar = true;

      //console.log(this.url);
    });
  }
}
