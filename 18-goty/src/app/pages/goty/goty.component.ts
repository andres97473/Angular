import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game, Mensaje } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[]=[];

  constructor( private gameService: GameService ) { }

  ngOnInit(): void {

    this.gameService.getNominados().subscribe( resp => {
      //console.log(resp);
      this.juegos = resp;      
    });
  }

  votarJuego( juego: Game ){

    //console.log(juego);    

    this.gameService.votarJuegos( juego.id )
                    .subscribe( (resp:any) => {
                      //console.log(resp); 
                      if(resp.ok ){
                        Swal.fire('Gracias',resp.mensaje,'success')
                      } else{
                        Swal.fire('Opps !!',resp.mensaje,'error')
                      }                     
                    })

  }



}
