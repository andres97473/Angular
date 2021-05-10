(function(){

    const miFuncion= function(a: string ){
        return a.toUpperCase();
    }

    const miFuncionF= (a: string ) => a.toUpperCase();


    console.log(miFuncion('normal'));
    console.log(miFuncionF('flecha'));
    
    const sumarN= function(a:number, b:number){
        return a + b;
    }

    const sumarF= (a:number, b:number) => a+b;
    
    console.log(sumarN(5,2));
    console.log(sumarF(10,20));
    
    const hulk = {
        nombre:'Hulk',
        smash(){
            
            setTimeout( () => {

                console.log(`${this.nombre } Smash!!!`);

            },1000);
            
        }
    }

    hulk.smash();
})();


