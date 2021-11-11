import { Component, OnInit } from '@angular/core';
import { ICardUser } from '../../../shared/components/cards/card-user/card-user.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public users: ICardUser = {
    name: 'Ivan Drago',
    age: 28,
    description: 'Desarrollador',
    avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
  };
  constructor() {}

  ngOnInit(): void {}
}
