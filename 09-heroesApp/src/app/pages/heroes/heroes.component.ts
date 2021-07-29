import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];

  cargando:boolean;

  
  constructor( private heroesService: HeroesService ) { 
    
    this.cargando = true;

  }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe( resp => {
      console.log(resp);      
      this.heroes=resp;
      this.cargando = false;
    });
  }

  borrarHeroe( heroe : HeroeModel, i : number ){

    Swal.fire({
      title: '¿Esta seguro?',
      text: `¿Esta seguro que desea borrar a ${heroe.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then ( resp => {

      if (resp.value){

        // borrar el heroe del arreglo
        this.heroes.splice( i, 1 );
    
        // crear constante para extraer el id del heroe
        const id:any = heroe.id;
    
        // borrar el heroe de la base de datos
        this.heroesService.borrarHeroe(id).subscribe();

      }

    });

  }

}
