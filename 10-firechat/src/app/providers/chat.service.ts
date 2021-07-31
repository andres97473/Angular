import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interface/mensaje.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class ChatService {


  private itemsCollection: AngularFirestoreCollection <Mensaje>=<any>[];
  private itemsCollectionLargo: AngularFirestoreCollection <Mensaje>=<any>[];

  public chats: Mensaje[]=[];
  public usuario: any = {};
  public numeroDeMensajes:number;
  public largoArreglo=0;
  

  constructor( private afs: AngularFirestore, 
                public afAuth: AngularFireAuth ) {
                  
    this.numeroDeMensajes=5
    
     this.afAuth.authState.subscribe( user => {
       console.log('Estado del usuario ', user);

       if( !user){
         return;
       }

       this.usuario.nombre = user.displayName;
       this.usuario.uid = user.uid;

       if( !this.usuario.nombre ){
        
        this.usuario.nombre = user.email;
        
      } 
      
       console.log(this.usuario);

       
       console.log('numero de mensajes constructor ',this.numeroDeMensajes);
       
       
     }); 
 
  }

  login( proveedor: string ){

    switch( proveedor ){

      case 'google':
        this.afAuth.signInWithPopup( new firebase.default.auth.GoogleAuthProvider());
        break;
      case 'github':
        this.afAuth.signInWithPopup( new firebase.default.auth.GithubAuthProvider());
        break;

    }

  }

  logout(){
    this.usuario = {};
    this.afAuth.signOut();
  }
  
  cargarMensajes(){

    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha','desc').limit(this.numeroDeMensajes));
    
    return this.itemsCollection.valueChanges().pipe(
                map( (mensajes:Mensaje[]) =>{
                  console.log('Arreglo ',mensajes);

                  this.largoArreglo=mensajes.length;
                  console.log('largo del Arreglo ', this.largoArreglo);
                  // this.chats=mensajes;
                  this.chats=[];
                  
                  for( let mensaje of mensajes ){

                    this.chats.unshift( mensaje);                    

                  }

                })
    );   

  }



  verMas( verMas : number ){

    this.numeroDeMensajes = this.numeroDeMensajes + verMas;

    this.cargarMensajes();
    console.log( 'numero de mensajes ', this.numeroDeMensajes);


    
  }

  agregarMensaje( texto: string ){

    // falta el UID del usuario

    let mensaje:Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }

    return this.itemsCollection.add( mensaje );

  }

}
