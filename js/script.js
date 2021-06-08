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

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.

var arrayUtente = [];
var lose = false

while (arrayUtente.length < 16 && !lose) {
    var numero
    var numInserito = parseInt(prompt('Inserisci numero'));

    if (!numPc.includes(numInserito)) {
        console.log('num ok');

        if (!arrayUtente.includes(numInserito)) {
            arrayUtente.push(numInserito);
        } else {
            console.log('num già inserito');
            alert('Hai già inserito questo numero' + arrayUtente)
        }

    } else {
        var lose = true;
        console.log('hai perso');
        alert('Sei morto :(')
    }
    
    console.log(arrayUtente);
}

console.log(arrayUtente.length);



// -------------------- Funzioni -----------------------------

// funzione numero random

function randomNumbers(numMin, numMax) {
    return Math.floor(Math.random() * (numMax - numMin + 1) ) + numMin;
}


