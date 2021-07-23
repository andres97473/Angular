import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre:'Andres',
    apellido:'Ojeda',
    correo:'andres@gmail.com',
    pais:''
  }

  paises: any=[]

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe( paises => {
      this.paises=paises;

      this.paises.unshift({
        name:'[Seleccione un pais]',
        alpha3Code:''
      })

      console.log(this.paises);
      
      
    });
  }

  guardar( forma: NgForm ){
    console.log('submit disparado');
    console.log( forma );
    console.log( forma.value );

    if( forma.invalid ){

      Object.values( forma.controls).forEach( control => {
        control.markAllAsTouched();
        
      });
      
      return;
    }
    
  }

}
