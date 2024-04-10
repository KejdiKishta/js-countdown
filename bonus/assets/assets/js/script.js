//* variabili cronometro
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector("minutes");
let hours = document.querySelector(".hours");

//* valore iniziale
seconds = 0;
minutes = 0;
hours = 0;

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
}, 1000)