(() => {

    // class Avenger {
    //     nombre: string;
    //     equipo: string;
    //     nombreReal: string;
    //     puedePelear: boolean;
    //     peleasGanadas: number;

    //     constructor(nombre: string){
    //         this.nombre = nombre ;

    //     }
    // }

    class Avenger {

        constructor(public nombre:string,
                    public equipo:string,
                    public nombreReal?:string,
                    public puedePelear: boolean=true,
                    public peleasGanadas: number = 0
        ){

        }
    }


    const antman = new Avenger('Antman','Cap');

    console.log(antman);



})();


