//Función tradicional

function robarPlanos(idPlano,despegar){
    if (idPlano > 0 && idPlano < 11){
        let mensaje = `El plano que se conseguió fue el ${idPlano}`;
        despegar(mensaje);
        
    }else{
        let error = "Pilas! No se ha robado un plano real";
        despegar(mensaje);
    }
}

robarPlanos(5,function(roboPlanos){
    console.log(roboPlanos);
});


//Función de flecha, si es un solo parametro se pueden quitar los paréntesis, y si es más de una línea se deberá abrir y cerrar llaves {}

/*let robarPlanos2 =(idPlano2) => {
    if (idPlano2 > 0 && idPlano2 < 11){
        let mensaje = `El plano que se conseguió fue el ${idPlano}`;
        return (mensaje);
    }else{
        let error = "Pilas! No se ha robado un plano real";
        return (error);
    } 
}

console.log(robarPlanos2(11));*/
