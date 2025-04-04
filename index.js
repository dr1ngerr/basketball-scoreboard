let pointsHome = 0
let pointsGuest = 0

let pointsHomeEl = document.getElementById("points-home")
let pointsGuestEl = document.getElementById("points-guest")

function sum1home() {
    pointsHome += 1
    pointsHomeEl.textContent = pointsHome
}

function sum2home() {
    pointsHome += 2
    pointsHomeEl.textContent = pointsHome
}

function sum3home() {
    pointsHome += 3
    pointsHomeEl.textContent = pointsHome
}

function sum1guest() {
    pointsGuest += 1
    pointsGuestEl.textContent = pointsGuest
}

function sum2guest() {
    pointsGuest += 2
    pointsGuestEl.textContent = pointsGuest
}

function sum3guest() {
    pointsGuest += 3
    pointsGuestEl.textContent = pointsGuest
}

function restartPoints() {
    pointsHome = 0
    pointsGuest = 0
    pointsHomeEl.textContent = 0
    pointsGuestEl.textContent = 0
}