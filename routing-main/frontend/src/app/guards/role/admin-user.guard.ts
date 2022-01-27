import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import Swal from 'sweetalert2';
import { AdminUserService } from '../../modules/admin/components/admin-users/admin-user.service';
import { ModuloPermisos } from '../../modules/admin/components/admin-users/iadmin-users.metadata';

@Injectable({
  providedIn: 'root',
})
export class AdminUserGuard implements CanActivate {
  constructor(private auth: AuthService, private _us: AdminUserService) {}

  verAdminConsultar(): boolean {
    const authPermisos = this.auth.getPermisos();
    if (authPermisos) {
      const nPermisos: ModuloPermisos[] = JSON.parse(authPermisos);
      //console.log(nPermisos);
      if (this._us.buscarPermisos(nPermisos, 'admin-user', 'Consultar')) {
        return true;
      }
    }
    return false;
  }

  canActivate() {
    let role = this.auth.getRol();

    if (role == 'administrador' || this.verAdminConsultar()) {
      console.log('consultar ', this.verAdminConsultar());
      return true;
    }
    //alert("You don't have admin rights");
    Swal.fire(
      'No tienes permiso para visitar este modulo!!, Comunicate con el administrador del sistema'
    );
    return false;
  }
}
