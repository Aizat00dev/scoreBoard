let home = document.getElementById("homeScore")
let guest = document.getElementById("guestScore")
let score = 0

function addOne(){
    score = score + 1
    guest.textContent = score
}
function addTwo(){
    score = score + 2
    guest.textContent = score
}
function addThree(){
    score = score + 3
    guest.textContent = score
}
function resetGuest(){
    guest.textContent = 0
    score = 0
}


let scoreHome = 0

function addOneHome(){
    scoreHome = scoreHome + 1
    home.textContent = scoreHome
}

function addTwoHome(){
    scoreHome = scoreHome + 2
    home.textContent = scoreHome
}
function addThreeHome(){
    scoreHome = scoreHome + 3
    home.textContent = scoreHome
}
function resetHome(){
    home.textContent = 0
    scoreHome = 0
}

