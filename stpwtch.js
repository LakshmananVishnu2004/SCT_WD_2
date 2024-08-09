let timer;
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 10);  // Update every 10ms for more accuracy
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    display.textContent = '00:00:00.000';
    startButton.disabled = false;
    stopButton.disabled = true;
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    const time = new Date(elapsedTime);
    const hours = String(time.getUTCHours()).padStart(2, '0');
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(time.getMilliseconds()).padStart(3, '0'); // Milliseconds formatting
    display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
