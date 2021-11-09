import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  listaUsuarios: Usuario[] = [
    { usuario: 'jperes', nombre: 'juan', apellido: 'peres', sexo: 'masculino' },
    { usuario: 'alopez', nombre: 'sara', apellido: 'lopez', sexo: 'femenino' },
    {
      usuario: 'slopez2',
      nombre: 'sara',
      apellido: 'corrales',
      sexo: 'femenino',
    },
    {
      usuario: 'zlopez3',
      nombre: 'sara',
      apellido: 'urbano',
      sexo: 'femenino',
    },
    {
      usuario: 'mgranadillo',
      nombre: 'martha',
      apellido: 'granadillo',
      sexo: 'femenino',
    },
    {
      usuario: 'aojeda',
      nombre: 'andres',
      apellido: 'ojeda',
      sexo: 'masculino',
    },
    {
      usuario: 'fibarra',
      nombre: 'felipe',
      apellido: 'ibarra',
      sexo: 'masculino',
    },
  ];

  constructor() {}

  getUsuarios() {
    return this.listaUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listaUsuarios.splice(index, 1);
  }
}
