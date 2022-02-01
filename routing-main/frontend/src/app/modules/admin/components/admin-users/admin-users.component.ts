import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AdminUserService } from '../admin-users/admin-user.service';
import { Permiso, Users } from '../admin-users/iadmin-users.metadata';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../admin-users/create-user/create-user.component';

import { find } from 'lodash';
import { ModuloPermisos } from './iadmin-users.metadata';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tabla1!: MatTable<Users>;

  displayedColumns: string[] = [
    'id',
    'number',
    'first_name',
    'last_name',
    'gender',
    'email',
    'rol',
  ];
  dataSource!: MatTableDataSource<Users>;

  panelOpenState = true;

  // controls filters
  idFilter = new FormControl('');
  numberFilter = new FormControl('');
  firstNameFilter = new FormControl('');
  lastNameFilter = new FormControl('');
  genderFilter = new FormControl('');
  filterValues = {
    id: '',
    number: '',
    first_name: '',
    last_name: '',
    gender: '',
  };

  sexos: any = [];

  // select row
  selectedRow!: Users | null;

  constructor(private _us: AdminUserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    //REVISAR
    this.sexos = this._us.getSexo();
    this.cargarUsuarios();

    this.idFilter.valueChanges.subscribe((id) => {
      this.filterValues.id = id;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.numberFilter.valueChanges.subscribe((number) => {
      this.filterValues.number = number;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.firstNameFilter.valueChanges.subscribe((first_name) => {
      this.filterValues.first_name = first_name;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.lastNameFilter.valueChanges.subscribe((last_name) => {
      this.filterValues.last_name = last_name;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.genderFilter.valueChanges.subscribe((gender: string) => {
      this.filterValues.gender = gender;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  ngAfterViewInit(): void {}

  cargarUsuarios() {
    this._us.getAdminUsers().subscribe((data: Users[]) => {
      //console.log(data);

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
        data.first_name.toLowerCase().indexOf(searchTerms.first_name) !== -1 &&
        data.last_name.toLowerCase().indexOf(searchTerms.last_name) !== -1 &&
        data.gender.toUpperCase().indexOf(searchTerms.gender) !== -1
      );
    };
    return filterFunction;
  }

  limpiarFiltro() {
    this.idFilter.setValue('');
    this.numberFilter.setValue('');
    this.firstNameFilter.setValue('');
    this.lastNameFilter.setValue('');
    this.genderFilter.setValue('');

    // deseleccionar row
    this.selectedRow = null;
  }

  selectRow(row: any) {
    console.log(row);
  }

  myFunction(row: Users) {
    const nPermisos: ModuloPermisos[] = JSON.parse(row.permisos);
    //console.log(nPermisos);

    this._us.buscarPermisos(nPermisos, 'admin-user', 'Consultar');

    //console.log(nPermisos[0].permisos[0].name);
    //console.log(row.permisos);
    this.selectedRow = row;
    alert(`id: ${row.id} - nombre: ${row.first_name} ${row.last_name}`);
  }

  abrirDialogo() {
    const nUser: Users = {
      number: '',
      first_name: '',
      last_name: '',
      gender: '',
      email: '',
      password: '',
      rol: '',
      permisos: '',
    };
    const dialogo1 = this.dialog.open(CreateUserComponent, {
      // valores por defecto al abrir formulario
      data: nUser,
    });

    dialogo1.afterClosed().subscribe((user) => {
      if (user != undefined) {
        this.agregarUser(user);
        //console.log(user);
      }
    });
  }

  // agregar user a datasource
  // agregarUser(user: User) {
  //   this.dataSource.data.push(
  //     new User(
  //       user.id,
  //       user.number,
  //       user.firstName,
  //       user.lastName,
  //       user.gender,
  //       user.email,
  //       user.rol,
  //       user.permisos
  //     )
  //   );

  //   this.dataSource.data = this.dataSource.data.slice();
  // }

  agregarUser(user: Users) {
    // se puede eliminar datos para que se acople a lo que recibe el API

    delete user.id;

    //console.log(user);

    this._us.agregarUser(user).subscribe(
      (res) => {
        //console.log(res);
        //this.router.navigate(['/admin/contact']);
        this.cargarUsuarios();

        this.dataSource.data = this.dataSource.data.slice();
      },
      (err) => console.error(err)
    );
  }
}
