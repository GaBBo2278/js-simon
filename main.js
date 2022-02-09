/* ---------------------------------------- start funzioni ---------------------------------------*/

//Dichiarazione funzione per generare numeri casuali
function generaNumeriCasuali(min, max) {
    //Genero numeri casuali tra un intervallo di numeri
    return Math.floor(Math.random() * (max - min +1)) + min;
}

//Dichiarazione funzione per la rimozione dei numeri mostrati sulla pagina
function resetMessaggio() {
    elemMessaggio.innerHTML = "";
}

//Dichiarazione funzione per creare un array dei numeri richiesti all'utente
function richiediNumeriUtente(){
    //Dichiarazione array vuoto dove inserire i numeri richiesti all'utente
    const numeriUtente = [];
    //Richiedo al utente di inserire 5num e controllo che non sia doppio
    while (numeriUtente.length < 5) {
        let numero = parseInt(prompt("Inserisci un numero"));
        if (!numeriUtente.includes(numero)) {
            numeriUtente.push(numero);
        }
    }
    return numeriUtente;
}

//Dichiarazione funzione per verificare quali tra i numeri inseriti sono stati indovinati
function verificaNumeriIndovinati(arrayNumeriGenerati, arrayNumeriInseriti) {
    //Dichiarazione di un array vuoto
    const indovinati = [];
    //Dichiarazione di un ciclo FOR
    for (let i = 0; i < arrayNumeriInseriti.length; i++) {
        //Controllo se i numeri inseriti sono tra i numeri generati
        if (arrayNumeriGenerati.includes(arrayNumeriInseriti[i])) {
            //Nel caso sono indovinati li inserisco nel array precedentemente dichiarato
            indovinati.push(arrayNumeriInseriti[i]);
        }
    }

    return indovinati;
}
//Dichiarazione funzione per mostrare nella schermata i numeri indovinati
function stampaNumeriIndovinati(arrayNumeriIndovinati) {
    const qtaNumeriIndovinati = arrayNumeriIndovinati.length;
    elemMessaggio.innerHTML = 'Hai indovinato ' + qtaNumeriIndovinati + ' numeri.' + arrayNumeriIndovinati;
}

/* ---------------------------------------- end funzioni -----------------------------------------*/


//Dichiarazione array vuoto per memorizzare i numeri casuali generati
const numeriGenerati = [];

//Genero 5 numeri casuali
while (numeriGenerati.length < 5) {
    const numeroCasuale = generaNumeriCasuali(1, 100);
    if (!numeriGenerati.includes(numeroCasuale)) {
        numeriGenerati.push(numeroCasuale);
    }
}
//Dichiarazione variabile e salvo al suo interno l'elemento MESSAGE
const elemMessaggio = document.getElementById('message');
//Mostro a video i numero generati
elemMessaggio.innerHTML = numeriGenerati;

const ritardo = 3;

//Timeout che nasconde i numeri casuali generati
setTimeout(resetMessaggio, ritardo * 1000);
//Timeout +1sec, per compatibilità con Chrome che richiede i numeri leti
setTimeout(function() {
    //Dichiarazione variabile in cui salvo il return della funzione 
    const numeriInseriti = richiediNumeriUtente();
    console.log(numeriInseriti);
    //Dichiarazione variabile in cui salvo il return della funzione   
    const numeriIndovinati = verificaNumeriIndovinati(numeriGenerati, numeriInseriti);
    //Richiamo funzione in mostro sulla schermata i numeri indovinati
    stampaNumeriIndovinati(numeriIndovinati);
}, (ritardo + 1) * 1000);