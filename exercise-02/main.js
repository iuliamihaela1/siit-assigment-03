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
    console.log('');
    console.log(`NEW ROUND!`);
    
    let uChoice = prompt(`Input your choice`);
    uChoice = uChoice.toLowerCase().trim();
    /**
     * TODO change the code to determine if the user input is valid (one of the options "rock", "paper", "scissors")
     * BONUS: consider also accepting case-insensitive values for the user choice (e.g. "Rock", "ROCK", "rOcK")
     */
    const validInput = isInputValid(uChoice);

    if(validInput){
        const cChoice = computerOption();
        const result = detectWinner(uChoice, cChoice);
        console.log(result);
    }
    else{
        console.error(`Invalid input: ${uChoice}`);
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
    console.log(`User's choice: ${userChoice}`);
    console.log(`Computers's choice: ${computerChoice}`);

    if (userChoice === computerChoice) return `It's a tie!`

    if (
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return `User wins!`
    } else {
        return `Computer wins!`
    }
}