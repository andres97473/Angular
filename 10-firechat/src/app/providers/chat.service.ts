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

  public chats: Mensaje[]=[];
  public usuario: any = {};
  

  constructor( private afs: AngularFirestore, 
                public afAuth: AngularFireAuth ) { 
    
     this.afAuth.authState.subscribe( user => {
       console.log('Estado del usuario ', user);

       if( !user){
         return;
       }

       this.usuario.nombre = user.displayName;
       this.usuario.uid = user.uid;

       console.log(this.usuario);
       
       
     }); 
 
  }

  login( proveedor: string ){
    this.afAuth.signInWithPopup( new firebase.default.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.signOut();
  }
  
  cargarMensajes(){

    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha','desc')
                                                                            .limit(5));
    
    return this.itemsCollection.valueChanges().pipe(
                map( (mensajes:Mensaje[]) =>{
                  console.log(mensajes);
                  // this.chats=mensajes;
                  this.chats=[];
                  
                  for( let mensaje of mensajes ){

                    this.chats.unshift( mensaje);                    

                  }

                })
    );   

  }

  agregarMensaje( texto: string ){

    // falta el UID del usuario

    let mensaje:Mensaje = {
      nombre:'Demo',
      mensaje: texto,
      fecha: new Date().getTime()
    }

    return this.itemsCollection.add( mensaje );

  }

}
