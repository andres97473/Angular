import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, mostrar:boolean= false): string {
    return ( mostrar ) ? '*'.repeat(value.length): value ;
  }
}
