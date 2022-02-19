const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissors=document.querySelector('#scissors');
const container=document.querySelector(".container");
const announcement= document.querySelector('.announcement');

const congrats= document.createElement("congrats");
const score= document.createElement("score");
const result = document.createElement("result");

rock.setAttribute('id', 'rock');
paper.setAttribute('id', 'paper');
scissors.setAttribute('id', 'scissors');
announcement.appendChild(score);
announcement.appendChild(result);
announcement.appendChild(congrats);


const btn= document.createElement("button");
btn.innerHTML="Refresh";
function refresh(){
  window.location.reload("Refresh")
}
btn.addEventListener('click', refresh);


rock.addEventListener('click', ()=> {
  playRound('Rock', computerPlay());
  console.log('hi');
  announceWinner();
  score.innerHTML= "Player: " + playerScore + "-" + "Computer: " + computerScore;
});

paper.addEventListener('click', ()=> {
  playRound('Paper', computerPlay());
  console.log('hi');
  announceWinner();
  score.innerHTML= "Player: " + playerScore + "-" + "Computer: " + computerScore;
});

scissors.addEventListener('click', ()=> {
  playRound('Scissors', computerPlay());
  console.log("computer Score is:", computerScore);
  console.log("player Score is:", playerScore);
  announceWinner();
  score.innerHTML= "Player: " + playerScore + "-" + "Computer: " + computerScore;
});



function computerPlay() {
    let items=['Rock', 'Paper', 'Scissors'];
    let item = items[Math.floor(Math.random()*items.length)];
    return item;
}
let playerScore=0;
let computerScore=0;
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
      if (computerSelection === 'Paper') {
        result.textContent = 'You Lose! Paper beats Rock';
        computerScore=computerScore+1;
      } else if (computerSelection === 'Scissors') {
        result.textContent = 'You Win! Rock beats Scissors';
        playerScore=playerScore+1;
      } else {
        result.textContent= "It's a tie, you both chose rock!";
      }
    } else if (playerSelection === 'Paper') {
      if (computerSelection === 'Scissors') {
        result.textContent = 'You Lose! Scissors beats Paper';
        computerScore=computerScore+1;
      } else if (computerSelection === 'Rock') {
        result.textContent = 'You Win! Paper beats Rock';
        playerScore=playerScore+1;
      } else {
        result.textContent = "It's a tie, you both chose paper!";
      }
    } else if (playerSelection === 'Scissors') {
      if (computerSelection === 'Rock') {
        result.textContent = 'You Lose! Rock beats Scissors';
        computerScore=computerScore+1;
      } else if (computerSelection === 'Paper') {
        result.textContent = 'You Win! Scissors beats Paper';
        playerScore=playerScore+1;
      } else {
        result.textContent = "It's a tie, you both chose scissors";
      }
    }
  }
        function announceWinner(){
          if(playerScore==5){
            congrats.textContent = " Congrats! You won!"
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true; 
            announcement.appendChild(btn);
          }
          else if(computerScore==5){
            congrats.textContent = " Computer won. oh well..."
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            announcement.appendChild(btn);
           }
        }

