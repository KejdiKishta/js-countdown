//* valore iniziale
let seconds = 0;
let minutes = 0;
let hours = 0;

//* prendo il bottone start
let startBtn = document.getElementById("start");
console.log(startBtn);

//* event listener
startBtn.addEventListener("click", function() {
    document.getElementById("start").setAttribute("disabled", true);

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

    //* richiamo stampa
    let print = timerPrint(seconds, minutes, hours);
    }, 1000);
})

