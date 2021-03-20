/*console.log("Paz y bien");

let suma = (2 + 5);
console.log(suma);*/

/*console.log("cero");

function uno() {
    setTimeout(
        function(){
            console.log("Uno");
        },0
    );
}

console.log("Dos")

function tres(){
    console.log("Tres");
}

uno();
tres();*/

function uno(auxiliar, dos) {
    setTimeout(function () {
        console.log("Uno" + auxiliar);
        dos();
    }, 2000)

}

/*function dos() {
    console.log("Dos");
}*/

uno(5, function () {
    console.log("Dos");
});
