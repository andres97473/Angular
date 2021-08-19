import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];

  constructor( private db: AngularFirestore ) { }

  ngOnInit(): void {

    this.db.collection('goty').valueChanges()
          .pipe( 
            map( (resp:any[]) => {

              // desestructurar arreglo y darle nombre a las propiedades
              // forma abreviada
              //return resp.map( ({ name, votos })=> ({ name, value:votos }) );

              // forma de objeto
              return resp.map( juego => {
                return {
                  name: juego.name,
                  value: juego.votos
                }
              })
            })
          )
          .subscribe( juegos => {
            //console.log(juegos);
            this.juegos = juegos;            
          })

  }

}
