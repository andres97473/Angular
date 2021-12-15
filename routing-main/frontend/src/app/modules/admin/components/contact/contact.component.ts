import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminUserService } from '../admin-users/admin-user.service';
import { Users } from '../admin-users/iadmin-users.metadata';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'number',
    'firstName',
    'lastName',
    'gender',
    'email',
    'rol',
    'permisos',
  ];
  dataSource!: MatTableDataSource<Users>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  panelOpenState = true;

  //users service
  userService: Users[] = [];

  constructor(private _us: AdminUserService) {}
  ngOnInit(): void {
    this.cargarUsuarios();
  }

  ngAfterViewInit(): void {}

  cargarUsuarios() {
    this._us.getAdminUsers().subscribe((data: Users[]) => {
      //this.users = data;
      //console.log(this.users);
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
