import { Component, OnInit } from '@angular/core';
import { ICardUser } from '../../../shared/components/cards/card-user/card-user.metadata';
import { USERS_DATA } from '../../../data/constants/user.const';
import { UserService } from '../../../data/services/api/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public users!: ICardUser[];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((r) => {
      if (!r.error) {
        //console.log(r);
        this.users = r.data;
      }
    });
  }
}
