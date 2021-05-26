import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true ): string {
    // console.log(value);
    //console.log(todas);
    
    value = value.toLowerCase();
    let nombres = value.split(' ');
    
    //console.log(nombres);
    
    if (todas) {
      nombres = nombres.map( nombre => {
        return nombre[0].toLocaleUpperCase() + nombre.substr(1);
      })    
      return nombres.join(' ');  
    } else{
      nombres[0]=nombres[0][0].toUpperCase() + nombres[0].substr(1);
      
    }

    return nombres.join(' ');
    
  }

}
