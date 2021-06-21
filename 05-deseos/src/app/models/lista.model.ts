import { ListaItem } from './lista-item.model';

export class Lista {

    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor( titulo: string ){
        this.titulo = titulo;

        this.creadaEn = new Date();
        // terminadaEn aun no lo creo ya que la lista apenas se crea en este punto
        this.terminada = false;

        //this.items sera igual a un arreglo vacio por que al crear la lista aun no tiene items
        this.items = [];

        // el id sera compuesto por fecha y hora para garantizar que no se repita
        this.id = new Date().getTime(); 


    }

}