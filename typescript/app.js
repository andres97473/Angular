"use strict";
(function () {
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    };
    //const { nombre, clave, poder }= avenger;
    var extraer = function (_a) {
        var nombre = _a.nombre, poder = _a.poder, clave = _a.clave;
        console.log(nombre);
        console.log(clave);
        console.log(poder);
    };
    extraer(avenger);
    var avengers = ['Thor'];
})();
