(function(){

    function getEdad(){
        return 10 + 20 + 30;
    }
    
    const nombre= 'Fernando';
    const apellido= 'Herrera';
    const edad= 33;

    //const salida= nombre + " " + apellido + " (Edad: " + edad + ")";
    const salida= `${nombre} ${apellido} (Edad: ${ getEdad() })`;
    
    //Fernando Herrera (Edad: 33)
    console.log( salida );


})();


