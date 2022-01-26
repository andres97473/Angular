export interface IAdminUsers {
  success: number;
  data: Users[];
}

export interface Users {
  id?: number;
  number: number | string;
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  password: string;
  rol: string;
  permisos: any;
}

export interface ModuloPermisos {
  modulo: string;
  permisos: Permiso[];
}

export interface Permiso {
  id: number;
  select: boolean;
  name: string;
}
