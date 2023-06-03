var timer;
var timeLeft = 20;

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').innerHTML = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('timer').innerHTML = 'Time\'s up!';
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    document.getElementById('timer').innerHTML = 'X';
    timeLeft = 20;
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);


