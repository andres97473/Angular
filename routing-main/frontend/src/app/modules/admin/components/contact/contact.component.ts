import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminUserService } from '../admin-users/admin-user.service';
import { Users } from '../admin-users/iadmin-users.metadata';

import * as _ from 'lodash';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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

  panelOpenState = true;

  //users service
  userService: Users[] = [];

  // controls filters
  idFilter = new FormControl('');
  numberFilter = new FormControl('');
  genderFilter = new FormControl('');
  filterValues = {
    id: '',
    number: '',
    gender: '',
  };

  constructor(private _us: AdminUserService) {}
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
    this._us.getAdminUsers().subscribe((data: Users[]) => {
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
  }
}
