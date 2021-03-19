/*1.PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus
aprendices padawan a calcular la distancia a la que cualquiera
de los planetas de la ruta N-14 pertenecientes a la ruta
comercial de la federación intergaláctica, se encuentra del
planeta NABOO.
Para calcular dicha distancia se debe:
 Recibir las coordenadas X,Y del planeta en UA
 Establecer la distancia*/


console.log("Función Tradicional")

function calcularDistancia(x,y){
    let distancia= Math.sqrt((x**2)+(y**2))
    return(distancia)
}

console.log("La distancia es: " + calcularDistancia(70,-50));
console.log("La distancia es: " + calcularDistancia(0,40));
console.log("La distancia es: " + calcularDistancia(-10,-10));
console.log("La distancia es: " + calcularDistancia(50,0));

console.log()
console.log("Función Flecha")

let calcularDistanciaFlecha = (x1,x2,y1,y2)=> Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));

console.log("La distancia es: " + calcularDistanciaFlecha(0,70,0,-50));
console.log("La distancia es: " + calcularDistanciaFlecha(0,0,0,40));
console.log("La distancia es: " + calcularDistanciaFlecha(0,-10,0,-10));
console.log("La distancia es: " + calcularDistanciaFlecha(0,50,0,0));