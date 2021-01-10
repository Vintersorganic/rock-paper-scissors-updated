function computerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    let rpsArray = ["Rock", "Paper", "Scissors"];
    return rpsArray[computerChoice];
}

function computerImg() {
    let computerChoiceDiv = document.querySelector(".computerChoice");
    let computerStr = computerChoice();
    computerChoiceDiv.setAttribute("style", `background-image: url(/img/${computerStr}.jpg);`);
}


// function computerChoiceImg() {
//     let computerChoice = document.querySelector(".computerChoice");
//     document.querySelector(".chooseScissors").addEventListener("click", () => chooseFrom("Scissors"))
// }

// function playRound(playerSelection, computerSelection) {

//     if (playerSelection === "rock" && computerSelection === "paper") {
//         return "You lose! Paper beats Rock!";
//     }
//     else if (playerSelection === "rock" && computerSelection === "scissors") {
//         return "You win! Rock beats Scissors!";
//     }
//     else if (playerSelection === "paper" && computerSelection === "scissors") {
//         return "You lose! Scissors beats Paper!";
//     }
//     else if (playerSelection === "paper" && computerSelection === "rock") {
//         return "You win! Paper beats Rock!";
//     }
//     else if (playerSelection === "scissors" && computerSelection === "paper") {
//         return "You win! Scissors beats Paper!";
//     }
//     else if (playerSelection === "scissors" && computerSelection === "rock"){
//     return "You lose! Rock beats Scissors!";   
//     }
//     else return "You draw";
// }

// function game() {
//     let playerCount = 0;
//     let computerCount = 0;
//     for (let i=0; i<5;i++){
//         let result = playRound(prompt("rock, paper or scisssors"), computerChoice());
//         alert(result);
//         if (result[4] === "w") {
//             playerCount++
//         }
//         else if (result[4] === "l") {
//             computerCount++
//         }
//         alert(`Player ${playerCount} - Computer ${computerCount}`);
//     }

//     if (playerCount > computerCount) {
//         alert(`Player won ${playerCount} to ${computerCount}`);
//     }
//     else if (playerCount < computerCount) {
//         alert(`Player lost ${playerCount} to ${computerCount}`);
//     }
//     else alert("You draw!");
// }

//game();

document.querySelector(".chooseRock").addEventListener("click", () => chooseFrom("Rock"));
document.querySelector(".choosePaper").addEventListener("click", () => chooseFrom("Paper"));
document.querySelector(".chooseScissors").addEventListener("click", () => chooseFrom("Scissors"));



function chooseFrom(str) {
    let playerChoice = document.querySelector(".playerChoice");
    playerChoice.setAttribute("style", `background-image: url(/img/${str}.jpg);`);
    computerImg();
 }
