import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AdminUserService } from '../admin-users/admin-user.service';
import { Users } from '../admin-users/iadmin-users.metadata';
import { MatDialog } from '@angular/material/dialog';
import { User } from './user';

import * as _ from 'lodash';
import { CreateUserComponent } from '../admin-users/create-user/create-user.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tabla1!: MatTable<Users>;

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
  dataSource!: MatTableDataSource<User>;

  panelOpenState = true;

  // controls filters
  idFilter = new FormControl('');
  numberFilter = new FormControl('');
  genderFilter = new FormControl('');
  filterValues = {
    id: '',
    number: '',
    gender: '',
  };

  // select row
  selectedRow!: User | null;

  constructor(private _us: AdminUserService, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.cargarUsuarios();

    this.idFilter.valueChanges.subscribe((id) => {
      this.filterValues.id = id;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.numberFilter.valueChanges.subscribe((number) => {
      this.filterValues.number = number;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.genderFilter.valueChanges.subscribe((gender) => {
      this.filterValues.gender = gender;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  ngAfterViewInit(): void {}

  cargarUsuarios() {
    this._us.getAdminUsers().subscribe((data: User[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.filterPredicate = this.createFilter();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = (data: any, filter: string) => {
      let searchTerms = JSON.parse(filter);
      return (
        data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1 &&
        data.number.toString().toLowerCase().indexOf(searchTerms.number) !==
          -1 &&
        data.gender.toLowerCase().indexOf(searchTerms.gender) !== -1
      );
    };
    return filterFunction;
  }

  limpiarFiltro() {
    this.idFilter.setValue('');
    this.numberFilter.setValue('');
    this.genderFilter.setValue('');

    // deseleccionar row
    this.selectedRow = null;
  }

  selectRow(row: any) {
    //console.log(row);
  }

  myFunction(row: User) {
    this.selectedRow = row;
    console.log('doble click');
    alert(`id: ${row.id} - nombre: ${row.firstName} ${row.lastName}`);
  }

  abrirDialogo() {
    const dialogo1 = this.dialog.open(CreateUserComponent, {
      data: new User(0, 0, '', '', '', '', '', ''),
    });

    dialogo1.afterClosed().subscribe((user) => {
      if (user != undefined) {
        this.agregar(user);
        //console.log(user);
      }
    });
  }

  agregar(user: User) {
    this.dataSource.data.push(
      new User(
        user.id,
        user.number,
        user.firstName,
        user.lastName,
        user.gender,
        user.email,
        user.rol,
        user.permisos
      )
    );

    this.dataSource.data = this.dataSource.data.slice();
  }
}
