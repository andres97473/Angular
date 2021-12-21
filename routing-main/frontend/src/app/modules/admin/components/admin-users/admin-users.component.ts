import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

import { AdminUserService } from './admin-user.service';
import { Users } from './iadmin-users.metadata';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<Users>;
  @ViewChild(MatSort) sort!: MatSort;

  panelOpenState = true;

  displayedColumns = [
    'id',
    'number',
    'first_name',
    'last_name',
    'gender',
    'email',
    'password',
    'rol',
    'permisos',
  ];

  //users: Users[] = [];

  dataSource!: MatTableDataSource<Users>;

  constructor(
    private _au: AdminUserService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {}

  cargarUsuarios() {
    this._au.getAdminUsers().subscribe((data: Users[]) => {
      //this.users = data;
      //console.log(this.users);
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource);

      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  addData() {
    const elemento = {
      id: 30,
      number: 1010202020,
      first_name: 'and',
      last_name: 'fel',
      email: 'and@ht.com',
      password: '12345678',
      gender: 'm',
      permisos: '[1,2,3,4]',
      rol: 'writer',
    };

    this.dataSource.data.push(elemento);

    console.log('usuario agregado');
  }

  datos(row: any) {
    console.log('evento');
    console.log(row);
    alert(row.email);
  }

  removeData() {}
}
