let timer;
let timeLeft = 0;
let timerRunning = false;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

function updateTimer() {
    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = formatTime(timeLeft);
}

function startTimer() {
    const timeInput = document.getElementById('timeInput').value;
    if (!timerRunning && timeInput > 0) {
        timeLeft = timeInput * 60;
        timerRunning = true;
        timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                timerRunning = false;
                alert('Time is up!');
                return;
            }
            timeLeft--;
            updateTimer();
        }, 1000);
    }
}


function resetTimer() {
    clearInterval(timer);
    timerRunning = false;
    document.getElementById('timeInput').value = ''; 
    timeLeft = 0; 
    updateTimer();
}
