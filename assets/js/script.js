//* creo una funzione che dice Buon Anno!
function congrats() {
    console.log("Gezuar vitin e ri!");
}

//* gli do un timeout di 10 secondi
setTimeout (congrats, 10000);

//* variabile con i secondi di countdoun
let countStart = 10;
console.log(countStart);

//* funzione con i numeri del countdown
function countdown () {
    //* se il numero è maggiore di 1 decremento e stampo
    if (countStart > 1) {
        countStart--;
        console.log(countStart);
    }
}

//* timeout per il countdown
setInterval (countdown, 1000);