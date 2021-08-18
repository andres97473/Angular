import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import firebase from "firebase/app";
import { FileItem } from '../models/file-item';

import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';
  

  constructor( private db: AngularFirestore) {

   }

   

   cargarImagenesFirebase( imagenes:FileItem[] ){

    //console.log(imagenes);
    const storageRef = firebase.storage().ref();

    for( const item of imagenes ){
      item.estaSubiendo = true;

      if( item.progreso >= 100 ){
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef
                                                    .child(`${this.CARPETA_IMAGENES}/${ item.nombreArchivo}`)
                                                    .put( item.archivo );

      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshop:firebase.storage.UploadTaskSnapshot )=>
        item.progreso = ( snapshop.bytesTransferred / snapshop.totalBytes ) * 100,
          (error) => console.error('Error al subir ', error),
          ()=>{
            console.log('Imagen cargada correctamente');
            
            uploadTask.snapshot.ref.getDownloadURL().then( resp => {
              //console.log(resp);
              this.guardarImagen( {
                nombre:item.nombreArchivo,
                url:resp
              } );              
            });                       
            
            item.estaSubiendo = false;           
                      
          });
    }
   }

   private guardarImagen( imagen: { nombre:string, url: string } ){

    this.db.collection(`/${ this.CARPETA_IMAGENES }`)
            .add( imagen );

   }


}
