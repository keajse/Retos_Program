//RETO DEL FIZZ BUZZ (200 numeros enteros)

/*Escribe, un programa que muestre en pantalla los números del 1 al 200, 
sustituyendo los múltiplos de 3 por el palabro “Fizz” y, a su vez, los múltiplos 
de 5 por “Buzz”. Para los números que, al tiempo, son múltiplos de 3 y 5, utiliza el combinado 
“FizzBuzz*/

console.log("Paz y bien...")
for (let x = 1; x < 201; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log("FizzBuzz")
    }
    else if (x % 3 == 0) {
        console.log("Fizz")
    }

    else if (x % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(x)
    }
}

