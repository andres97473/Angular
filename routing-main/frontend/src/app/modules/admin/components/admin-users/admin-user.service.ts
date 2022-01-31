import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users, IAdminUsers, Permiso } from './iadmin-users.metadata';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../../../services/auth/auth.service';
import { ModuloPermisos } from './iadmin-users.metadata';
import { SEXO } from '../../../../data/constants/admin-user.const';

@Injectable({
  providedIn: 'root',
})
export class AdminUserService {
  headers = new HttpHeaders();
  token = this.authService.getToken();
  permisos: ModuloPermisos[] = [];
  sexo: any = [];

  constructor(private http: HttpClient, private authService: AuthService) {
    //console.log(this.token);
  }

  getAdminUsers(): Observable<any> {
    //this.headers.append('Authorization', 'dadadasdawdasd');
    //console.log(this.headers);

    return this.http
      .get(`http://localhost:4000/api/users`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      })
      .pipe(
        map((resp: any) => {
          return resp.data;
        })
      );
  }

  agregarUser(user: Users) {
    return this.http.post(`http://localhost:4000/api/users`, user);
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

    //console.log(nPermisos[0].select);

    return nPermisos[0].select;
  }

  getSexo() {
    return (this.sexo = SEXO);
  }

  getPermisosModulo() {
    return (this.permisos = [
      {
        modulo: 'admin-user',
        permisos: [
          { id: 1, select: false, name: 'Consultar' },
          { id: 2, select: false, name: 'Adicionar' },
          { id: 3, select: false, name: 'Editar' },
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
    ]);
  }
}
