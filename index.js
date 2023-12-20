let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

document.getElementById('startBtn').addEventListener('click', startStopwatch);
document.getElementById('stopBtn').addEventListener('click', stopStopwatch);
document.getElementById('resetBtn').addEventListener('click', resetStopwatch);

function startStopwatch() {
    interval = setInterval(function() {
        milliseconds++;

        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }

        document.getElementById('stopwatch').textContent =
            (hours < 10 ? '0' + hours : hours) + ':' +
            (minutes < 10 ? '0' + minutes : minutes) + ':' +
            (seconds < 10 ? '0' + seconds : seconds) + ':' +
            (milliseconds < 10 ? '0' + milliseconds : milliseconds);
    }, 10);
}

function stopStopwatch() {
    clearInterval(interval);
}

function resetStopwatch() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('stopwatch').textContent = '00:00:00';
}