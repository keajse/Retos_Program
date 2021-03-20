/*3. PROBLEMA: La luna de Endor pierde temperatura día a día,
para ello hay que hacer un monitoreo constante, Cree una
función de flecha que permita calcular la temperatura media de
la luna a partir de la temperatura máxima y mínima de cada día*/

console.log("Función Tradicional")

function promedio(tempMax,tempMin)
{
    let average = (tempMax + tempMin)/2
    return average
}

console.log(promedio(25,18))

console.log()
console.log("Función Flecha")

let promedioTemp = (tin,tfi)=>((tin+tfi)/2)

console.log(promedioTemp(35,5))