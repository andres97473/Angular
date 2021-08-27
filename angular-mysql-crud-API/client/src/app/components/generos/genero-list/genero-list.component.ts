import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../../../services/generos.service';
import { Genero } from '../../../models/genero';

@Component({
  selector: 'app-genero-list',
  templateUrl: './genero-list.component.html',
  styleUrls: ['./genero-list.component.css']
})
export class GeneroListComponent implements OnInit {

  generos:Genero[] = [];


  constructor( private generosService: GenerosService ) { }

  ngOnInit(): void {

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

}
