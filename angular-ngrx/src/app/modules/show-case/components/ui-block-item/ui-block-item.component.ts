import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ShowCaseService } from '../../services/show-case.service';

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.css'],
})
export class UiBlockItemComponent implements OnInit {
  listData: any = [];

  constructor(private showCase: ShowCaseService) {}

  ngOnInit(): void {
    this.showCase.getDataApi().subscribe((res) => {
      this.listData = res;
    });
  }
}
