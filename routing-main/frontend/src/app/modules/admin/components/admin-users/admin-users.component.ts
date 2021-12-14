import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminUserService } from './admin-user.service';
import { Users } from './iadmin-users.metadata';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent implements OnInit {
  panelOpenState = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns = [
    'id',
    'number',
    'firstName',
    'lastName',
    'gender',
    'email',
    'rol',
    'permisos',
  ];

  users: Users[] = [];

  dataSource: any;

  constructor(private _au: AdminUserService) {}

  ngOnInit(): void {
    this._au.getAdminUsers().subscribe((data: Users[]) => {
      this.users = data;
      //console.log(this.users);
      this.dataSource = new MatTableDataSource<Users>(this.users);
      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  ngAfterViewInit() {
    // console.log(this.users);
  }

  addData() {}

  removeData() {}
}
