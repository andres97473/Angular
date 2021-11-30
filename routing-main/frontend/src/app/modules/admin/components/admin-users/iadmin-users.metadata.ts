export interface IAdminUsers {
  success: number;
  data: Users[];
}

export interface Users {
  id: number;
  number: number;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  rol: string;
  permisos: string;
}
