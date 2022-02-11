import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.css'],
})
export class ListFilesComponent implements OnInit {
  files: any = [];

  constructor(private _restService: RestService) {}

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this._restService.getFiles().subscribe((res) => {
      //console.log(res.data);
      this.files = res.data;
    });
  }
}
