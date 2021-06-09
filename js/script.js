// Il computer deve generare 16 numeri casuali tra 1 e 100. 
// I numeri non possono essere duplicati.
var numPc = [];

while (numPc.length < 16) {
    var randomNum = randomNumbers(1, 100)

    if (!numPc.includes(randomNum)) { 
        numPc.push(randomNum);
    }
}

console.log(numPc)

// parte utente
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.  
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina
// altrimenti si continua chiedendo all’utente un altro numero.


var arrayUtente = [];
var lose = false;

while (arrayUtente.length < 16 && !lose) {
    // num da 1 a 100
    var numInserito = parseInt(prompt('Inserisci numero da 1 a 100'));

    if (!numPc.includes(numInserito)) {
        console.log('num ok');

        if (!arrayUtente.includes(numInserito) && numInserito > 0 && numInserito < 101) {
            arrayUtente.push(numInserito);
        } else {
            // L’utente non può inserire più volte lo stesso numero.
            console.log('num già inserito');
            alert('Hai già scelto questi numeri:' + ' ' +  arrayUtente + ' !!Ricorda puoi solo inserire numeri da 1 a 100!!');
        }

    } else {
        var lose = true;
        console.log('hai perso');
        alert('Sei morto :(');
    }
    
    console.log(arrayUtente);
    
}

// console.log(arrayUtente.length);


// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

for (var i = 0; i < 3; i++) {
    if (arrayUtente.length == 16){
        alert('hai vinto');
    } if (arrayUtente.length < 16) {
        console.log(arrayUtente.length);
        document.getElementById("ituoinumeri").innerHTML = 'hai inserito' + ' ' + arrayUtente.length + ' ' + 'numeri';
    }
}

// -------------------- Funzioni -----------------------------

// funzione numero random

function randomNumbers(numMin, numMax) {
    return Math.floor(Math.random() * (numMax - numMin + 1) ) + numMin;
}