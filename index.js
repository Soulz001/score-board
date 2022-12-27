let homeCount = 0, awayCount = 0,
countBoard1 = document.querySelector("#count-board-1"),
countBoard2 = document.querySelector("#count-board-2"),
addOneHome = document.querySelector("#add-one-home"),
addTwoHome = document.querySelector("#add-two-home"),
addThreeHome = document.querySelector("#add-three-home"),
addOneAway = document.querySelector("#add-one-away"),
addTwoAway = document.querySelector("#add-two-away"),
addThreeAway = document.querySelector("#add-three-away"),
resetGameBtn = document.querySelector("#reset-game-btn")

let addOne = () => countBoard1.textContent = homeCount += 1
addOneHome.addEventListener("click", addOne)

let addTwo = () => countBoard1.textContent = homeCount += 2
addTwoHome.addEventListener("click", addTwo)

let addThree = () => countBoard1.textContent = homeCount += 3
addThreeHome.addEventListener("click", addThree)

addOneAway.addEventListener("click", function(){
    countBoard2.textContent = awayCount += 1    
})
addTwoAway.addEventListener("click", function(){
    countBoard2.textContent = awayCount += 2    
})
addThreeAway.addEventListener("click", function(){
    countBoard2.textContent = awayCount += 3    
})
resetGameBtn.addEventListener("click", function(){
    countBoard1.textContent = 0;
    countBoard2.textContent = 0;
    homeCount = 0;
    awayCount = 0;
})




