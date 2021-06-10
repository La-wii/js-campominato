var bombe = [];
var numeriUtente = [];


var scelta = parseInt(prompt('inserisci 0, 1 oppure 2'));

while (scelta < 0 || scelta > 2 || isNaN(scelta)){
    alert('Attenzione! Deve essere un numero tra 0 e 2');
    var scelta = parseInt(prompt('inserisci 0, 1 oppure 2'));
} 

var possibilita = massimo - 16;

switch(scelta){
    case 0: 
        var massimo = 100;
        // var possibilita = massimo - 16 se la dichiaro fuori posso evitare di ripetere;
        break;
    case 1:   
        var massimo = 80;
        // var possibilita = massimo - 16 se la dichiaro fuori posso evitare di ripetere;  
        break;
    default:
        var massimo = 50;
        // var possibilita = massimo - 16 se la dichiaro fuori posso evitare di ripetere;  
        break;    
}

while (bombe.length < 16 ){
    var numero = randomNumbers(1, massimo);
    if (!bombe.includes(numero)){
        bombe.push(numero);
    }
}
console.log(bombe);



var semaforo = false;

while (numeriUtente.length < possibilita && !semaforo){ 
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
    } else if(!searchNum(numeriUtente,numeroUtente)){
        numeriUtente.push(numeroUtente);
    }   else {
        alert('hai già inserito questo numero');
    }
    console.log(numeriUtente);

}

var lunghezzaArray = numeriUtente.length;

if (semaforo){
    alert('hai perso dopo ' + lunghezzaArray + ' tentativi');
} else {
    alert('hai vinto');
}

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




