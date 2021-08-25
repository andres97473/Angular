import { Component, HostBinding, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  
  @HostBinding ('class') classes = 'row';

  games :Game[]=[];

  constructor( private gamesService: GamesService ) { }

  ngOnInit(): void {

    this.getGames();
    
  }

  getGames(){
    this.gamesService.getGames().subscribe( 
      //resp => console.log(resp),
      (res:any) => {
        this.games = res;   
        //console.log(this.games);
             
      },
      err => console.error(err)
      );
  }

  deleteGame( id: any ){
    // console.log(id);
    this.gamesService.deletegame(id).subscribe(
      resp => {
        console.log(resp)
        this.getGames()        
      },
      err => console.error(err)      
    );
  }




}
