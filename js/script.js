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

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock")
    {
        switch (computerSelection)
        {
            case "rock":
                result = "It's a Draw! Rock against Rock!";
                break;
            case "paper":
                result = "You Lose! Paper beats Rock!";
                break;
            case "scissor":
                result = "You Win! Rock beats Scissor!";
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
                result = "You Win! Paper beats Rock!";
                break;
            case "paper":
                result = "It's a Draw! Paper against Paper!";
                break;
            case "scissor":
                result = "You Lose! Scissor beats Paper!";
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
                result = "You Lose! Rock beats Scissor!";
                break;
            case "paper":
                result = "You Win! Scissor beats Paper!";
                break;
            case "scissor":
                result = "It's a Draw! Scissor against Scissor";
                break;
            default:
                alert("Faulty input");
        }
    }
    return result;
}

