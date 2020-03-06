// defining operators
let userScore = 0;
let computerScore = 0; 
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// define computer choice and generation
function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// letter to word converter
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

// If win output
function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! &#128293;`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout (function() {userChoice_div.classList.remove('green-glow')}, 2000);
}

// If draw output
function draw(userChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "IT'S A DRAW";
    document.getElementById(userChoice).classList.add('yellow-glow');
    setTimeout (function() {userChoice_div.classList.remove('yellow-glow')}, 2000);
}

// If lose output
function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lose! &#128169;`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout (function() {userChoice_div.classList.remove('red-glow')}, 2000);
}

// Define user choice and generate computer choice
function game(userChoice) {
    const ComputerChoice = getComputerChoice();
    switch (userChoice + ComputerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, ComputerChoice);
        break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, ComputerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, ComputerChoice);
        break;
    }

}

// Listen for user choice
function main() {
    rock_div.addEventListener ('click', function() {
        game("r");
    });

    paper_div.addEventListener ('click', function() {
        game("p");
    });

    scissors_div.addEventListener ('click', function() {
        game("s")
    });
}

// EXECUTE
main();