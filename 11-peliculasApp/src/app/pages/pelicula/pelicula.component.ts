import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

import { Location } from '@angular/common';

import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {

  public pelicula: any;
  public cast: any;


  constructor( private activatedRoute: ActivatedRoute,
                private peliculasService: PeliculasService,
                private location: Location,
                private router: Router ) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params.id;

    combineLatest([
      this.peliculasService.getPeliculaDetalle(id),
      this.peliculasService.getCast(id)
    ]).subscribe( ( [pelicula, cast ]) => {

      if(!pelicula){
        this.router.navigateByUrl('/home');
        return;
      }

      this.pelicula = pelicula;

      // retorno normal con todos los actores
      //this.cast = cast;   

      // quitar actores que no tienen foto
      this.cast = cast.filter( actor => actor.profile_path !== null);  

    });   

  }



  onRegresar(){

    this.location.back();

  }




}
