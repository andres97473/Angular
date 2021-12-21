export class User {
  constructor(
    public id: number,
    public number: number,
    public firstName: string,
    public lastName: string,
    public gender: string,
    public email: string,
    public rol: string,
    public permisos: string
  ) {}
}
