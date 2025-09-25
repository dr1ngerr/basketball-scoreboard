let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

function sum1PointHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function sum2PointHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function sum3PointHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function sum1PointGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function sum2PointGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function sum3PointGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function resetScores() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}

if (homeScore > guestScore) {
    homeScoreEl.style.color = '#00ff00';
}