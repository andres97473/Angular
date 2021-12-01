import { Component, OnInit } from '@angular/core';
import { AdminUserService } from './admin-user.service';
import { Users } from './iadmin-users.metadata';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent implements OnInit {
  users: Users[] = [];
  constructor(private _au: AdminUserService) {}

  ngOnInit(): void {
    this._au.getAdminUsers().subscribe((data: Users[]) => {
      this.users = data;
      //console.log(this.users);
    });
  }
}
