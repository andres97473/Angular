import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();
  
  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  guardar( form:NgForm ){

    if( form.invalid ){
      console.log('Formulario invalido');      
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>

    // console.log( form );
    // console.log( this.heroe );

    if( this.heroe.id ){

      peticion = this.heroesService.actualizarHeroe(this.heroe);
      
    } else {

      peticion = this.heroesService.crearHeroe(this.heroe);

    }

    peticion.subscribe( resp => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizo correctamente',
        icon: 'success'
      });
    });

    
  }

}
