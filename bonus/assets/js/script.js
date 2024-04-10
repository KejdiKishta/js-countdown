//* valore iniziale
let seconds = 0;
let minutes = 0;
let hours = 0;

//* funzione di incremento del timer
const timer = setInterval( function() {
    if (seconds < 59) {
        seconds++;
    } else if (minutes < 59) {
        seconds = 0;
        minutes++;
    } else if (hours < 23) {
        seconds = 0;
        minutes = 0;
        hours++;
    }

    console.log(hours, minutes, seconds);

    //* richiamo stampa
    let print = timerPrint(seconds, minutes, hours)
}, 1000);