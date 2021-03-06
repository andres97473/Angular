import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  public moviesBuscar: Movie[]=[]; 

  public texto:string="";

  constructor( private activatedRoute: ActivatedRoute,
                private peliculasService: PeliculasService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      // console.log(params.texto);
      this.texto = params.texto;

      this.peliculasService.buscarPeliculas( params.texto )
                            .subscribe( movies => {
                              this.moviesBuscar=movies;
                              // console.log(this.moviesBuscar);                              
                            })
      
    })
  }

}
