/*2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes
códigos de acceso a las naves de guerra los cuáles reposan en
la base de datos central, para ello debe programar una función
que permita recibir la palabra clave de cada nave y separar
imprimiendo solo el nombre del piloto asignado a cada nave.
Tenga en cuenta que el formato de todos los datos es el
siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn*/


console.log("Función Tradicional")

function pilotear(nave,piloto){
    let codigo = `${nave}: ${piloto}`;
    let nombre = codigo.split(' ')[2];
    console.log(codigo);
    return (nombre)
}

console.log(pilotear("ARQ2546","Maria Camila"));


console.log()
console.log("Función Flecha")

let pilotear2=(nave,piloto)=>(nave + ": "+ piloto).split(' ')[1];

console.log(pilotear2("KTS2154","Pablo José"));