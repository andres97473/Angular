import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  nuevasCanciones: any [] = [];
  loading: boolean;

  error: boolean=false;
  mensajeError:string="";


  constructor( spotify: SpotifyService) { 

    this.loading = true;

    spotify.getNewReleases()
        .subscribe( (data:any) => {
          console.log(data);
          this.nuevasCanciones = data;
          this.loading = false;
        }, ( errorServicio )=> {

          this.loading = false;
          this.error=true;
          console.log(errorServicio.error.error.message);
          this.mensajeError=errorServicio.error.error.message;
        });
        

  }


}
