import { Component } from '@angular/core';
import { ModuloPermisos, Permiso } from '../admin-users/iadmin-users.metadata';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  panelOpenState = false;

  permisosPlano: number[] = [];

  foods = [
    { id: 1, select: false, name: 'dumpling' },
    { id: 2, select: true, name: 'burger' },
    { id: 3, select: false, name: 'sandwich' },
  ];

  permisos: ModuloPermisos[] = [
    {
      modulo: 'admin-user',
      permisos: [
        { id: 1, select: false, name: 'Consultar' },
        { id: 2, select: false, name: 'Adicionar' },
        { id: 3, select: true, name: 'Editar' },
        { id: 4, select: false, name: 'Eliminar' },
        { id: 5, select: false, name: 'Imprimir' },
      ],
    },
    {
      modulo: 'contact',
      permisos: [
        { id: 6, select: true, name: 'Consultar' },
        { id: 7, select: false, name: 'Adicionar' },
        { id: 8, select: false, name: 'Editar' },
        { id: 9, select: false, name: 'Eliminar' },
        { id: 10, select: false, name: 'Imprimir' },
      ],
    },
  ];

  constructor() {
    this.buscarPermisos(this.permisos, 'admin-user', 'Consultar');
  }

  buscarPermisos(
    moduloPermisos: ModuloPermisos[],
    modulo: string,
    permiso: string
  ): boolean {
    const nModulo: ModuloPermisos[] = moduloPermisos.filter(
      (m) => m.modulo == modulo
    );

    const nPermisos: Permiso[] = nModulo[0].permisos.filter(
      (p: Permiso) => p.name == permiso
    );

    console.log(nPermisos[0].select);
    return nPermisos[0].select;
  }

  onChangeFood($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    this.foods = this.foods.map((d) => {
      if (d.id == id) {
        d.select = isChecked;
        return d;
      }
      return d;
    });
    console.log(this.foods);
  }

  onChangePermisos($event: any, i: number) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    //console.log(id, isChecked);

    let modulo = this.permisos[i];
    //console.log(this.permisos);
    //console.log(i);

    modulo.permisos = modulo.permisos.map((d) => {
      if (d.id == id) {
        d.select = isChecked;
        return d;
      }
      return d;
    });
    //console.log(modulo);
    this.permisos[i] = modulo;
    //console.log(this.permisos);
  }

  guardarPermisos() {
    console.log(this.permisos);
    // for (const modulo of this.permisos) {
    //   //console.log(modulo.modulo);
    //   for (const permisos of modulo.permisos) {
    //     if (permisos.select) {
    //       this.permisosPlano.push(permisos.id);
    //     }
    //   }
    // }
    // console.log(this.permisosPlano);
    // this.permisosPlano = [];
  }
}
