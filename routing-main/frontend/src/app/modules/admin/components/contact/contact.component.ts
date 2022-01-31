import { Component } from '@angular/core';
import { ModuloPermisos, Permiso } from '../admin-users/iadmin-users.metadata';
import { AdminUserService } from '../admin-users/admin-user.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  panelOpenState = false;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  sexos: any = [];

  constructor(private _us: AdminUserService) {
    this.sexos = _us.getSexo();
  }

  changeSexo(value: string) {
    console.log(value);
  }
}
