import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public movies: Movie[]=[];

  constructor( private _ps: PeliculasService ) { 
      
  }

  ngOnInit(): void {

    this._ps.getCartelera().subscribe(
      resp=>{
        // todo el objeto
        // console.log(resp); 

        // array de peliculas
        this.movies=resp.results;
        //console.log( this.movies ); 

        // imprimir titulo del primer elemnto del array
        // console.log(resp.results[0].title);       
      });
  }

}
