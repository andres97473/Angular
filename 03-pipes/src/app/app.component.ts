import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre:string='Fernando';
  nombre2:string='feRnAndo hErRerA jImenEz';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  personajes:string[] = ['Ironman','Spiderman','Thor','Loki','Groot']; 

  PI:number= Math.PI;

  porcentaje:number = 0.234;

  salario:number = 1234.5;

  heroe = {
    nombre:'Logan',
    clave:'Wolverine',
    edad:500,
    direccion: {
      calle:'Pimera',
      casa:20
    }
  };

  valorPromesa= new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('llego la data');      
    }, 4500);
  });

  fecha:Date= new Date();

  idioma:string='es';

  videoUrl:string='https://www.youtube.com/embed/hV06AttTeUY';

  activar:boolean=true;


}
