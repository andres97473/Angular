import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[]=[];
  public moviesSlideshow: Movie[]=[];

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    
    const pos = (document.documentElement.scrollTop || document.body.scrollTop ) + 1300 ;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight );

    // console.log({pos, max});

    if ( pos > max) {

      // console.log('Llamar el servicio');
      if( this._ps.cargando){
        return;
      }

      this._ps.getCartelera().subscribe( movies => {
        this.movies.push(...movies);

      });
      

    }

  }

  constructor( private _ps: PeliculasService ) { 
      
  }

  ngOnInit(): void {

    this._ps.getCartelera().subscribe(
      movies=>{
        // todo el objeto
        // console.log(resp); 

        // array de peliculas
        this.movies=movies;
        //console.log( this.movies ); 

        // imprimir titulo del primer elemnto del array
        // console.log(resp.results[0].title);    
        
        this.moviesSlideshow = movies;
      });
  }

  ngOnDestroy(){

    this._ps.resetCarteleraPage();

  }




}
