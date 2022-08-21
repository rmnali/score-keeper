let homeScore = 0
let guestScore = 0

document.getElementById("home-score").textContent = homeScore
document.getElementById("guest-score").textContent = guestScore

// Home Scoring

function addHome1(){
    homeScore +=1
    document.getElementById("home-score").textContent = homeScore
}

function addHome2(){
    homeScore +=2
    document.getElementById("home-score").textContent = homeScore
}

function addHome3(){
    homeScore +=3
    document.getElementById("home-score").textContent = homeScore
}





// Guest Scoring

function addGuest1(){
    guestScore +=1
    document.getElementById("guest-score").textContent = guestScore
}

function addGuest2(){
    guestScore +=2
    document.getElementById("guest-score").textContent = guestScore
}

function addGuest3(){
    guestScore +=3
    document.getElementById("guest-score").textContent = guestScore
}
