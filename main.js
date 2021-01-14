function computerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    let rpsArray = ["Rock", "Paper", "Scissors"];
    return rpsArray[computerChoice];
}

function computerImg() {
    let computerChoiceDiv = document.querySelector(".computerChoice");
    let computerStr = computerChoice();
    computerChoiceDiv.setAttribute("style", `background-image: url(./img/${computerStr}.jpg);`);
    return computerStr;
}

document.querySelector(".chooseRock").addEventListener("click", () => chooseFrom("Rock"));
document.querySelector(".choosePaper").addEventListener("click", () => chooseFrom("Paper"));
document.querySelector(".chooseScissors").addEventListener("click", () => chooseFrom("Scissors"));



function chooseFrom(str) {
    let playerChoice = document.querySelector(".playerChoice");
    playerChoice.setAttribute("style", `background-image: url(./img/${str}.jpg);`);
    computerImg()
 }

 let rock = document.querySelector(".chooseRock").addEventListener("click", () => returnChoice("Rock"));
 let paper = document.querySelector(".choosePaper").addEventListener("click", () => returnChoice("Paper"));
 let scissors = document.querySelector(".chooseScissors").addEventListener("click", () => returnChoice("Scissors"));

 function returnChoice(str) {
     return str;
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
// //     }
// //     else return "You draw";
// // }

// function game() {
//         let playerCount = 0;
//         let computerCount = 0;
//         let playerScore = document.querySelector("#playerScore");
//         let computerScore = document.querySelector("#computerScore");
//         for (let i=0; i<5;i++){
//             let resultHuman = sad;
//             let resultComputer = computerImg();

//             if (resultHuman === "Rock" && resultComputer == "Scissors"||resultHuman === "Paper" && resultComputer == "Rock"|| 
//                         resultHuman === "Scissors" && resultComputer == "Paper") {
//                 playerScore.textContent = playerCount++;
//                 }
//             else if (resultHuman === "Rock" && resultComputer == "Paper"||resultHuman === "Paper" && resultComputer == "Scissors"|| 
//                         resultHuman === "Scissors" && resultComputer == "Rock") {
//                 computerScore.textContent = computerCount++;
//                 }
        
//     }

//     if (playerCount > computerCount) {
//         alert(`Player won ${playerCount} to ${computerCount}`);
//     }
//     else if (playerCount < computerCount) {
//         alert(`Player lost ${playerCount} to ${computerCount}`);
//     }
//     else alert("You draw!");
// }

// //game();
