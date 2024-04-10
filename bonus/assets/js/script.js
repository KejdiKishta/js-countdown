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
    timer = setInterval( function() {
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

//* prendo il bottone pause
let pauseBtn = document.getElementById("pause")

//*event listener
pauseBtn.addEventListener("click", function() {
    clearInterval(timer);
    document.getElementById("start").removeAttribute("disabled");
})

//* prendo il bottone reset
let resetBtn = document.getElementById("reset")
resetBtn.addEventListener("click", function() {
    clearInterval(timer);
    document.getElementById("start").removeAttribute("disabled");

    //* reset timer
    seconds = 0;
    minutes = 0;
    hours = 0;

    //* richiamo stampa
    let print = timerPrint(seconds, minutes, hours);
})

