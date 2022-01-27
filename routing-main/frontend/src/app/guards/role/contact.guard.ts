import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AdminUserService } from 'src/app/modules/admin/components/admin-users/admin-user.service';
import { ModuloPermisos } from 'src/app/modules/admin/components/admin-users/iadmin-users.metadata';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ContactGuard implements CanActivate {
  constructor(private auth: AuthService, private _us: AdminUserService) {}

  verContactConsultar(): boolean {
    const authPermisos = this.auth.getPermisos();
    if (authPermisos) {
      const nPermisos: ModuloPermisos[] = JSON.parse(authPermisos);
      //console.log(nPermisos);
      if (this._us.buscarPermisos(nPermisos, 'contact', 'Consultar')) {
        return true;
      }
    }
    return false;
  }

  canActivate() {
    let role = this.auth.getRol();

    if (role == 'administrador' || this.verContactConsultar()) {
      console.log('consultar ', this.verContactConsultar());
      return true;
    }
    //alert("You don't have admin rights");
    Swal.fire(
      'No tienes permiso para visitar este modulo!!, Comunicate con el administrador del sistema'
    );
    return false;
  }
}
