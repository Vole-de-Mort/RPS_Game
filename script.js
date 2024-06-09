
// Function to get computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
  
// Function to play a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie! Replay the round.";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'paper' && computerSelection === 'Rock') ||
      (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
      return `You Win!`;
    } else {
      return `You Lose!`;
    }
}
function game(){
	let playerScore = 0;
	let computerScore = 0;

	const div = document.querySelector('div');
	const content = document.createElement('div');
	const mainList = document.querySelector('ul');



	const buttons = document.querySelectorAll('button');
		buttons.forEach((button)=>{
			button.onclick = () =>{
				const result = playRound(button.id, getComputerChoice());
				console.log(result);
				content.textContent = result
				div.appendChild(content);
				if (result == "You Win!"){
					playerScore++;
				}else if(result == "You Lose!"){
					computerScore++;
				};
				const currentItem = document.createElement('li');
				const currentScore = document.createElement('span');
				currentScore.textContent = playerScore+" / "+computerScore;
				currentItem.appendChild(currentScore);
				mainList.appendChild(currentItem);

				if(playerScore==5 || computerScore==5){
					document.getElementById('myList').innerHTML='';
					if (playerScore>computerScore){
						div.innerHTML = "You win . the game will reset!";
					}else if(playerScore<computerScore){
						div.innerHTML = "You lose . the game will reset!";
					}

					playerScore=0;
					computerScore=0;
				}
			}
		}
	);
}
// Start the game
game();
// visualisation du keyboard navigation 

function nameAlert(e){
	if (e.type == 'click' || e.type == ' ' || e.type == 'Enter'){
		alert(e.target.textContent);
	}
}
const btns = document.querySelectorAll('button');
btns.forEach(button =>{
	button.addEventListener('click', nameAlert);
	button.addEventListener('keydown', nameAlert);
})