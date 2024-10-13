// Generates a random option between rock, paper & scissors
function computerOption(){
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

//Checks if the user input is one of the allowed options
function isInputValid (input) {
    return ['rock', 'paper', 'scissors'].includes(input)
}


// runs a new round of rock - paper - scissors game
function newRound(){    
    let uChoice = prompt(`Input your choice`);
    uChoice = uChoice.toLowerCase().trim();

    /**
     * TODO change the code to determine if the user input is valid (one of the options "rock", "paper", "scissors")
     * BONUS: consider also accepting case-insensitive values for the user choice (e.g. "Rock", "ROCK", "rOcK")
     */
    const validInput = isInputValid(uChoice);

    if(validInput){
        const cChoice = computerOption();
        document.getElementById("user-choice").textContent = `Users choice: ${uChoice}`
        document.getElementById("computer-choice").textContent = `Computers choice: ${cChoice}`
        const result = detectWinner(uChoice, cChoice);
    }
    else{
        document.getElementById('round-result').textContent =  `Invalid input: ${uChoice}`;
    }
}


/**
 *  TODO implement the function that detects the winner 
 *  The function should return one of the messages: "User wins!" / "Computer wins!" / "It's a tie!"
 *  RULES: 
 *      paper beats rock
 *      rock beats scissors
 *      scissors beats paper
 */
function detectWinner(userChoice, computerChoice){
    let resultDiv = document.getElementById('round-result')
    console.log(`User's choice: ${userChoice}`);
    console.log(`Computers's choice: ${computerChoice}`);

    if (userChoice === computerChoice) { 
        resultDiv.textContent = `It's a tie!`
        return
    }

    if (
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDiv.textContent = `User wins!`
    } else {
        resultDiv.textContent = `Computer wins!`
    }
}