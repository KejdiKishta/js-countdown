//* funzione di stampa
function timerPrint(seconds, minutes, hours) {
    let sPrint = ""
    let mPrint = ""
    let hPrint = ""

    if (seconds  < 10) {
        sPrint = "0" + seconds.toString();
    } else {
        sPrint = seconds.toString();
    }

    if (minutes  < 10) {
        mPrint = "0" + minutes.toString();
    } else {
        mPrint = minutes.toString();
    }
    
    if (hours  < 10) {
        hPrint = "0" + hours.toString();
    } else {
        hPrint = hours.toString();
    }

    document.getElementById("seconds").innerText = sPrint;
    document.getElementById("minutes").innerText = mPrint;
    document.getElementById("hours").innerText = hPrint;
};

