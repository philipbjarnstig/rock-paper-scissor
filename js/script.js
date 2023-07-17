function getComputerChoice()
{
    const min = 1;
    const max = 3;
    let choice;
    //Randomizes a number between 1 - 3 and assigned to rNumber
    let rNumber = Math.floor(Math.random() * ((max - min) + min) + min);
    // Assigns choice depending on number
    if (rNumber === 1)
    {
        choice = "Rock";
    }
    else if (rNumber === 2)
    {
        choice = "Paper";
    }
    else
    {
        choice = "Scissor";
    }
    //returns choice: Rock/Paper/Scissor
    return choice;
}

function playRound(playerSelection, computerSelection)
{
    let result;
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock")
    {
        switch (computerSelection)
        {
            case "rock":
                result = "0 It's a Draw! Rock against Rock!";
                break;
            case "paper":
                result = "-1 You Lose! Paper beats Rock!";
                break;
            case "scissor":
                result = "+1 You Win! Rock beats Scissor!";
                break;
            default:
                alert("Faulty input");
        }
    }
    else if(playerSelection === "paper")
    {
        switch (computerSelection)
        {
            case "rock":
                result = "+1 You Win! Paper beats Rock!";
                break;
            case "paper":
                result = "0 It's a Draw! Paper against Paper!";
                break;
            case "scissor":
                result = "-1 You Lose! Scissor beats Paper!";
                break;
            default:
                alert("Faulty input");
        }
    }
    else
    {
        switch (computerSelection)
        {
            case "rock":
                result = "-1 You Lose! Rock beats Scissor!";
                break;
            case "paper":
                result = "+1 You Win! Scissor beats Paper!";
                break;
            case "scissor":
                result = "0 It's a Draw! Scissor against Scissor";
                break;
            default:
                alert("Faulty input");
        }
    }
    return result;
}

function game(playerSelection)
{
    let firstChar;

    const roundResult = document.querySelector("#roundResult");
    const gameResult = document.querySelector("#gameResult");
    let pScore = document.querySelector("#playerScore");
    let cScore = document.querySelector("#computerScore");

    roundResult.textContent = playRound(playerSelection, computerSelection = getComputerChoice());
    console.log(roundResult);
    firstChar = roundResult.textContent.charAt(0);
    if (firstChar === "+")
    {
        playerScore += 1;
    }
    else if (firstChar === "-")
    {
        computerScore += 1;
    }

    pScore.textContent = "Your Score: " + playerScore;
    cScore.textContent = "Computer Score: " + computerScore;

    roundCount++;

    if(roundCount === 5)
    {
        if(playerScore > computerScore)
            gameResult.textContent = "You won the game!";
        else if(computerScore > playerScore)
            gameResult.textContent = "You lost the game!";
        else
            gameResult.textContent = "The game is a draw!";
    }
}

