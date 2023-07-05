function getComputerChoice(min, max)
{
    let choice
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
