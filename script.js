/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//Recuperiamo il bottone e gli elementi nell'"game-area"
const button = document.getElementById('start');
const gameArea = document.getElementById('game-area');

//Generare 5 numeri casuali univoci.
const numbers = generateNumbers();

//Al click su start:
//-- appaiono 5 numeri
//-- e parte il countdown.

//Al termine del countdown:
//-- i numeri spariscono
//-- vengono chiesti i 5 numeri visualizzati.

//Viene comunicato:
//-- quanti comunicati
//-- quali comunicati.


//Creo una funzione per geneare i numeri casuali.
function generateNumbers(arraylenght){

    const uniqueNumbers = [];

    //Ripetiamo l'operazione finchè la lunghezza dell'array saraà inferiore al mumer di numeri casuali generati.
    while(uniqueNumbers.lenght < arraylenght){

        const number = generateRandomNumber(1, 100);
        if (uniqueNumbers.includes(number)=== false){
            uniqueNumbers.push (number);
        }
    }
    return uniqueNumbers;
    
}

//Creo una funzione per generare numeri casuali univoci.
function generateRandomNumber(min, max){

    //Calcoliamo il range di numeri da generare.
    const range = max-min+1;
    
    //Creiamo la costante per geneare randomicamente un numero.
    const generatedNumber = Math.floor(Math.random()*range)+ min;

    //Restituisci il numero generato.
    return generateNumbers;
}