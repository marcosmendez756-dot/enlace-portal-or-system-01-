// Privacy Toggle: Hides everything instantly
function togglePrivacy() {
    const content = document.getElementById('main-content');
    content.classList.toggle('hidden');
    const btn = document.getElementById('safety-switch');
    btn.innerText = content.classList.contains('hidden') ? "SHOW SCREEN" : "HIDE SCREEN";
}

// Simple Pomodoro Timer
let timer;
function startTimer() {
    let timeLeft = 25 * 60;
    const display = document.getElementById('timer');
    
    timer = setInterval(() => {
        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;
        display.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        if (timeLeft <= 0) clearInterval(timer);
        timeLeft--;
    }, 1000);
}

// Social Worker Link (Update with your Google Form URL)
function openSupport() {
    window.open('https://forms.google.com/YOUR_FORM_HERE', '_blank');
}

