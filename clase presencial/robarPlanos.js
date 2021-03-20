//Función tradicional

function robarPlanos(idPlano,despegar){
    if (idPlano > 0 && idPlano < 11){
        let mensaje = `El plano que se conseguió fue el ${idPlano}`;
        despegar(null, mensaje);
        
    }else{
        let error = `Pilas! No se ha robado un plano real `;
        despegar(error, null);
    }
}

robarPlanos(3,function(error, mensajeOk){

    if(error){
        console.log(error);
        console.log("No despegar")
    }else{
        console.log(mensajeOk);
        console.log("Estamos despegando");
    }
    

    
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

