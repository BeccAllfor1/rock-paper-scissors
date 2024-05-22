
document.addEventListener("DOMContentLoaded", () => {

//const choices = ["rock", "paper", "scissors","lizard", "spock" ];
let playerChoice = " ";
let compChoice = " ";
let resultScreen = ("section-picked");

document.querySelectorAll(".player-choice.btn").forEach (btn =>{
    btn.addEventListener("click", (e) =>{
        playerChoice = getPlayerChoice (e.target);
        

    })
})

})









/**
* Gets the current score from the DOM and increments by 1
*/

//function incrementScore() {
//    let oldScore = parseInt(document.getElementById("score").innerText);
//   document.getElementById("score").innerText = ++oldScore;
//}
