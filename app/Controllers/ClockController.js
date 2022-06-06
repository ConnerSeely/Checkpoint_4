

export function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session')
    var greeting = document.getElementById('greeting')

    if (hrs >= 12) {
        session.innerHTML = 'PM';
        greeting.innerHTML = 'Good Afternoon'
    } else {
        session.innerHTML = 'AM';
        greeting.innerHTML = 'Good Morning'
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }
    if (min < 10) {
        min = '0' + min
    }
    if (sec < 10) {
        sec = '0' + sec
    }


    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

    setInterval(displayTime, 1000);
}