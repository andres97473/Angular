import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  mensaje: string="";
  elemento: any;
  loading : boolean;
  loadingMensajes : boolean;
  

  constructor( public _cs: ChatService ) { 
    this.loading= false;
    this.loadingMensajes= false;

    this._cs.cargarMensajes().subscribe( () => {

                              setTimeout( () => {
                                
                                this.elemento.scrollTop = this.elemento.scrollHeight;

                              }, 20)
                             });
    
  }

  ngOnInit(){

    this.elemento = document.getElementById('app-mensajes');

    setTimeout( () => {
      this.loading=true;
    }, 1000);
    

  }

  verMas(i: number ){      
    
    
    this._cs.verMas(i);
    this._cs.cargarMensajes().subscribe( () => {

      setTimeout( () => {
        
        this.elemento.scrollDown = this.elemento.scrollHeight;

      }, 20)
     });

     setTimeout( () => {
      this.loadingMensajes=true;
    }, 500);

    this.loadingMensajes=false;

  }

  

  enviarMensaje( mensaje: string ){

    console.log(this.mensaje);

    if ( this.mensaje.length === 0 ){

      return;

    } else {

      this._cs.agregarMensaje(this.mensaje)
          .then( ()=> {console.log('Mensaje enviado')
                        this.mensaje=""})
          .catch( (err)=>console.error('Error al guardar', err));

    }
    

  }

}
