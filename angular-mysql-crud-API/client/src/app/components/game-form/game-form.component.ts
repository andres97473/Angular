import { Component, HostBinding, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GamesService } from '../../services/games.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GenerosService } from '../../services/generos.service';
import { Genero } from '../../models/genero';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding ('class') classes = 'row';

  game: Game = {
    id:0,
    title:'',
    description:'',
    image:'',
    created_at: new Date(),
    id_genero:6
  };

  generos:Genero[]=[]

  edit=false;

  constructor( private gamesService: GamesService,
                private router: Router,
                private actived: ActivatedRoute,
                private generosService: GenerosService ) { 

  }

  ngOnInit(): void {
    const params = this.actived.snapshot.params;
    //console.log(params);
    if( params.id ){
      this.gamesService.getOneGame(params.id).subscribe(
        resp => {
          //console.log(resp)  
          this.game = resp;  
          this.edit = true;      
        },
        err => console.error(err)        
      );
    }

    this.getGeneros();


    
  }


  getGeneros(){
    this.generosService.getGeneros().subscribe( 
      //resp => console.log(resp),
      (res:any) => {
        this.generos = res;   
        //console.log(this.generos);
             
      },
      err => console.error(err)
      );
  }

  saveNewGame(){
    // se puede eliminar datos para que se acople a lo que recibe el API
    delete this.game.id;
    delete this.game.created_at;    

    console.log(this.game);

    this.gamesService.saveGame( this.game ).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games'])
      },
      err => console.error(err)      
    )
    
  }


  updateGame(){
    //console.log(this.game);
    delete this.game.created_at;

    this.gamesService.updateGame((this.game.id as any), this.game).subscribe(
      resp => {
        console.log(resp)      
      },
      err => console.error(err)      
    );
    
  }




}
