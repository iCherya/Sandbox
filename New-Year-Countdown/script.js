function timeToNewYear() {
    let today = new Date();
    let nextYear = today.getFullYear() + 1;
    let countDown = new Date(`January 1 ${nextYear} 00:00:00`);

    timeRemain = parseInt((countDown - today) / 1000);
    let dd = parseInt(timeRemain / (60 * 60 * 24));
    timeRemain = timeRemain % (60 * 60 * 24);
    let hh = parseInt(timeRemain / (60 * 60));
    timeRemain = timeRemain % (60 * 60);
    let mm = parseInt(timeRemain / 60);
    let ss = timeRemain % 60;


    document.querySelector('#dd').innerText = dd;
    document.querySelector('#hh').innerText = hh;
    document.querySelector('#mm').innerText = mm;
    document.querySelector('#ss').innerText = ss;
    setInterval(timeToNewYear, 1000);
}

timeToNewYear();