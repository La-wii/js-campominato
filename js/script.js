var bombe = [];
var numeriUtente = [];
var massimo = 100;
var possibilita = massimo - 16;

while (bombe.length < 16 ){
    var numero = randomNumbers(1, massimo);
    if (!bombe.includes(numero)){
        bombe.push(numero);
    }
}




var semaforo = false;

while (numeriUtente.length < 5 && !semaforo){ 
    // oppure semaforo == false
    var numeroUtente = parseInt(prompt('inseisci un numero da 1 a 100'));
    
    // ------------------------ soluzione if - else
    // if (numeroUtente >= 1 && numeroUtente <= massimo){
    //     numeriUtente.push(numeroUtente);
    // } else {
    //     alert('numero non consentito');
    // }

    // ------------------------------------- soluzione do while
    // do {
    //     var numeroUtente = parseInt(prompt('inseisci un numero da 1 a 100'));
    // } while (numeroUtente < 1 ||  numeroUtente > massimo);

    // ------ soluzione while
    while (numeroUtente < 1 ||  numeroUtente > massimo){
        alert('Attenzione! Hai inserito un numero non consentito');
        var numeroUtente = parseInt(prompt('inseisci un numero da 1 a 100'));
    }

    if (searchNum(bombe, numeroUtente)){
        alert('bomba trovata');
        semaforo = true;
    } else {
        numeriUtente.push(numeroUtente);
    }

}

var lunghezzaArray = numeroUtente.length;

if (semaforo){
    alert('hai perso dopo ' + lunghezzaArray + 'tentativi');
} else {
    alert('hai vinto');
}

console.log(numeriUtente);
console.log(bombe);


// -------------------- funzioni
// funzione random
function randomNumbers(numMin, numMax) {
    return Math.floor(Math.random() * (numMax - numMin + 1) ) + numMin;
}

// funzione verifica se numero è presente in array
function searchNum (array, numero){
    for (var i = 0 ; i < array.length; i++){
        if (array[i] == numero){
            return true;
        }
    }
    return false; 
}




