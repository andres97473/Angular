import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any = [];

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
              .subscribe( paises => {
                this.paises = paises;
                console.log( this. paises );                
              })
  }

  drop( evento: any ){

    const paisesEvento:CdkDragDrop<any> = evento ;

    console.log( evento );

    moveItemInArray( this.paises, paisesEvento.previousIndex, paisesEvento.currentIndex );
          

  }

}
