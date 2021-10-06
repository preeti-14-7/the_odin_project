
//  const playerChoice = document.querySelectorbyId('.user')
let computerSelection ='';
let playerSelection ='';

 //computer selection
function computerPlay()
{
    let textArray = [
        'rock',
        'paper',
        'scisor'
    ];
    let randomNumber = textArray[Math.floor(Math.random()*textArray.length)];
    return randomNumber;
}



//user selection 
function userPlay()
{
    let textArray = [
      'rock',
      'paper',
      'scisor'
  ];
  let randomNumber = document.getElementById("myBtn").value = "BMW";;
  return randomNumber;
}



//playround
    let computerPoints = 0;
    let playerPoints   = 0;
function playRound(playerSelection, computerSelection) {

    if(playerSelection === "rock" && computerSelection === "paper")
    {
      // console.log("computer win and player lost");
        computerPoints++;
        if(playerPoints >0)
        {
          playerPoints--;
        }
        else
        playerPoints =0;

    }
    
    else if(playerSelection === "paper" && computerSelection === "rock")
    {
     // console.log("player win and computer lost");
          playerPoints++;
          if(computerPoints > 0)
          {
            computerPoints--;
          }
          else
          computerPoints = 0;
    }
    else if(playerSelection === "scisor" && computerSelection === "paper")
    {
     ///console.log("player win and computer lost");
          playerPoints++;
          if(computerPoints > 0)
          {
            computerPoints--;
          }
          else
          computerPoints = 0;
    }
    else if(playerSelection ==="paper" && computerSelection === "scisor")
    {
     // console.log("computer win and player lost");
        computerPoints++;
        if(playerPoints >0)
        {
          playerPoints--;
        }
        else
        playerPoints =0;
    }
    else if(playerSelection === "scisor" && computerSelection === "rock")
    {
      //console.log("player win and computer lost"); 
          playerPoints++;
          if(computerPoints > 0)
          {
            computerPoints--;
          }
          else
          computerPoints = 0;

    }
    else if(playerSelection === "rock" && computerSelection === "scisor")
    {
      //console.log("computer win and player lost");
          computerPoints++;
          if(playerPoints >0)
          {
            playerPoints--;
          }
          else
          playerPoints =0;
    }
    

  }
  
  function game()
  {
    for(let i=1; i<=5 ; i++)
    {
      computerSelection =  computerPlay();
      playerSelection = userPlay();
      playRound(playerSelection,computerSelection);
      // console.log("computer choice: " + computerSelection);
      // console.log("player choice : " + playerSelection);
      // console.log("playerpoints: " + playerPoints);
      // console.log("computer: " + computerPoints);

    }
    

    if(computerPoints >playerPoints)
    {
      console.log("player win");
    }
    else if(playerPoints > computerPoints)
    {
      console.log("computer win");
    }
    else
    {
      console.log("Tie");
    }
  }
 
  game();
 // console.log(playRound(playerSelection, computerSelection));