(() => {

    const avenger = {
        nombre:'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    }

    //const { nombre, clave, poder }= avenger;

    const extraer= ({ nombre, poder, clave}:any) => {

        console.log(nombre);
        console.log(clave);
        console.log(poder);

    }

    extraer(avenger);


    const avengers: string[]= ['Thor'];



})();


