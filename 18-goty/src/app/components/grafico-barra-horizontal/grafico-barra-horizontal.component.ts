import { Component, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AngularFirestore } from '@angular/fire/firestore'


@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  goty:any=[];

  results :any[] = [
    {
      "name": "Juego 1",
      "value": 20
    },
    {
      "name": "Juego 2",
      "value": 25
    },
    {
      "name": "Juego 3",
      "value": 15
    },
    {
      "name": "Juego 4",
      "value": 30
    }
  ];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = "nightLights";

  //intervalo:any;

  constructor( private fireStore: AngularFirestore ) {

    // this.intervalo = setInterval( () => {
    //   console.log('tick');

    //   const newResults = [...this.results];

    //   for( let i in newResults ){
    //     newResults[i].value = Math.round( Math.random() * 500 )
    //   }

    //   this.results = [...newResults];
      
    // }, 1500 );

  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnDestroy(){
    //clearInterval( this.intervalo );
  }


}
