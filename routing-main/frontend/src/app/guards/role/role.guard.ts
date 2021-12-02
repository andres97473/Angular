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

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService) {}
  canActivate() {
    let role = this.auth.getRol();
    let permisos: any = this.auth.getPermisos();

    if (
      role == 'administrador' ||
      permisos.includes(2) ||
      permisos.includes(5)
    ) {
      //console.log('Permiso 2 true ', permisos.includes(2));
      return true;
    }
    //alert("You don't have admin rights");
    Swal.fire("You don't have admin rights");
    return false;
  }
}
