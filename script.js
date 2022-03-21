/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//Recuperiamo il bottone e gli elementi nell'"game-area"
const button = document.getElementById('start');
const gameArea = document.getElementById('game-area');

//Variabili di configurazione
const timeToWait = 30;
const numbersToGuess = 5;


//Generare 5 numeri casuali univoci.
const numbers = generateNumbers(numbersToGuess);

//Al click su start:
button.addEventListener('click', () => {

    //-- appaiono 5 numeri
    gameArea.innerText = numbers.join(' - ');
    //-- e parte il countdown.
    setTimeout(endTimeout, timeToWait*1000);
});

//Al termine del countdown:
function endTimeout(){

//-- i numeri spariscono
gameArea.innerText = "";

//-- vengono chiesti i 5 numeri visualizzati.
const UserNumbers = askNumbers(numbersToGuess);

//Viene comunicato:
//-- quanti indovinati
//-- quali indovinati.
}

function askNumbers (numberToAsk){
    const userNumbers = [];
    let number;
    for(let i = o ; i < numberToAsk; i ++){
        do{
            const number = parseInt(prompt('che numero hai visto?'));
        }while(isNaN(number))
        userNumbers.push(number);
    }
    return userNumbers;
}

//Creo una funzione per geneare i numeri casuali.
function generateNumbers(arraylenght){

    const uniqueNumbers = [];

    //Ripetiamo l'operazione finchè la lunghezza dell'array sarà inferiore al mumer di numeri casuali generati.
    while(uniqueNumbers.lenght < arraylenght){

        const number = generateRandomNumber(1, 100);
        if (!uniqueNumbers.includes(number)){
            uniqueNumbers.push(number);
        }
    }
    return uniqueNumbers;
    
};

//Creo una funzione per generare numeri casuali univoci.
function generateRandomNumber(min, max){

    //Calcoliamo il range di numeri da generare.
    const range = max-min+1;
    
    //Creiamo la costante per geneare randomicamente un numero.
    const generatedNumber = Math.floor(Math.random()*range)+ min;

    //Restituisci il numero generato.
    return generateNumbers;
}