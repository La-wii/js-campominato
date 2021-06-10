// IL computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var bombe = [];
var numeriUtente = [];

var scelta = parseInt(prompt('Inserisci 0, 1 oppure 2'));

while(scelta < 0 || scelta > 2 || isNaN(scelta)){
    alert('Attenzione! Deve essere un NUMERO compreso tra 0 e 2');
    var scelta = parseInt(prompt('Inserisci 0, 1 oppure 2'));
}
var massimo = 50;

switch(scelta){
    case 0: 
        massimo = 100;
        break;
    case 1:
        massimo = 80;
        break;
}

var possibilita = massimo - 16;

while(bombe.length < 16){
    //se il numero esiste non lo inserisco
    //posso farlo con una funzione creata da me oppure utilizzo includes di JavaScript
    var numero = numeriRandom(1,massimo);
    if(!bombe.includes(numero)){
        bombe.push(numero);
    }
}
console.log(bombe);

var semaforo = false;

while(numeriUtente.length < possibilita && semaforo == false){
    var numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e ' + massimo));

    //per controllare che è un numero è nel range tra 1 e 100 possiamo usare un'istruzione condizionale
    // if(numeroUtente >= 1 && numeroUtente <= massimo){
    //     numeriUtente.push(numeroUtente);
    // } else {
    //     alert('non è nel range');
    // }

    // con l'if se ci sono altre righe di codice le va a fare, quindi devo strutturarlo bene

    //soluzione con il while
    while(numeroUtente < 1 || numeroUtente > massimo  || isNaN(numeroUtente)){
        //programmare il while affinchè prima o poi la condizione diventi falsa, altrimenti si ricade in un ciclo infinito
        alert('non è nel range.');
        var numeroUtente = parseInt(prompt('Inserisci un NUMERO tra 1 e ' + massimo));
    }

    // soluzione con il do while, manca l'alert, per metterlo si potrebbe creare una variabile ma non è consigliabile
    // do {
    //     var numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e ' + massimo));
    // } while(numeroUtente < 1 || numeroUtente > massimo);

    if(ricercaNumero(bombe, numeroUtente)) {
        alert('bomba trovata');
        semaforo = true;
    } else if(!ricercaNumero(numeriUtente, numeroUtente)){
        numeriUtente.push(numeroUtente);
    } else {
        alert('Hai già detto questo numero!');
    }

}

var lunghezzaArray = numeriUtente.length;
if(semaforo){
    console.log('Hai perso dopo ' + lunghezzaArray + ' tentativi!');
} else {
    console.log('Hai vinto');
}


console.log(numeriUtente);



function numeriRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function ricercaNumero(array, numero){
    for(var i = 0; i < array.length; i++){
        if(array[i] == numero){
            //in questo caso vuol dire che l'ha trovato
            return true;
        }
    }
    return false;
}

//soluzione corretta ma un pò più lunga
// function ricercaNumero(array, numero){
//     var trovato = false;
//     var i = 0;
//     while (i < array.length && trovato == false){
//         if(array[i] == numero){
//             //in questo caso vuol dire che l'ha trovato
//             trovato = true;
//         }
//         i++;
//     }
//     return trovato;
// }

//******Esempio
// var array = [6,7,9,12,5,123,100];
// var numero = 5;

// primo caso 
// 6 == 5 ? no 
// 7 == 5 ? no
// ...no
// 5 == 5 siii return true

// var numero = 1500;
//mi deve restituire false quando finisce il controllo dell'ultimo numero ed esattamente quando finisce il ciclo for

