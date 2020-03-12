
const result = document.querySelector('.roundResult')
const buttonList = document.getElementsByClassName('button');
let playerSelection = "";
let computerSelection = "";
let playerScoreLabel = document.querySelector('.playerScore');
let cpuScoreLabel = document.querySelector('.cpuScore');
let drawScoreLabel = document.querySelector('.drawScore');

var computerWins = 0;
var playerWins = 0;
var totalDraws = 0;



Array.from(buttonList).forEach((button) => {
	button.addEventListener('click', (e) => {
		computerSelection = computerPlay();
		playerSelection = button.id; playRound(playerSelection,computerSelection)

		if((computerWins == 10) || (playerWins == 10)) {
			gameOver();
		}
	});
})



function computerPlay() {
	
	var randNum = Math.random() * (4-1) + 1;
	var weapon;
	randNum = Math.floor(randNum);
	
	if(randNum == 1) {
		weapon = "rock";	
	}
	if(randNum == 2) {
		weapon = "paper";
	}
	if(randNum == 3) {
		weapon = "scissors";
	}

	return weapon;
}

function playRound(playerSelection, computerSelection) {
	
	if((computerSelection == "rock") && (playerSelection == "rock")) {
		totalDraws = totalDraws + 1;
		drawScoreLabel.textContent = totalDraws;
		
		console.log("There are", totalDraws, " draws.");
		return "Draw";
	}
	if((computerSelection == "paper") && (playerSelection == "rock")){
		computerWins++;
		cpuScoreLabel.textContent = computerWins;
		return "You lose, paper beats rock";
	}
	if((computerSelection== "scissors") && (playerSelection == "rock")){
		playerWins++;
		playerScoreLabel.textContent = playerWins;
		return "You win, rock beats scissors";
	}
	if((computerSelection == "rock") && (playerSelection == "paper")) {
		playerWins++;
		playerScoreLabel.textContent = playerWins;
		return "You win, paper beats rock";
	}
	if((computerSelection == "paper") && (playerSelection == "paper")){
		totalDraws++;
		drawScoreLabel.textContent = totalDraws;
		return "Draw";
	}
	if((computerSelection== "scissors") && (playerSelection == "paper")){
		computerWins++;
		cpuScoreLabel.textContent = computerWins;
		return "You lose, scissors beats paper";
	}
	if((computerSelection == "rock") && (playerSelection == "scissors")) {
		computerWins++;
		cpuScoreLabel.textContent = computerWins;
		return "You lose, rock beats scissors";
	}
	if((computerSelection == "paper") && (playerSelection == "scissors")){
		playerWins++;
		playerScoreLabel.textContent = playerWins;
		return "You win, scissors beats paper";
	}
	if((computerSelection== "scissors") && (playerSelection == "scissors")){
		totalDraws++;
		drawScoreLabel.textContent = totalDraws;
		return "Draw";
	}
		
}



function gameOver() {

	console.log("Computer has won ", computerWins, " times");
	console.log("Player has won ", playerWins, " times");
	console.log("There have been ", totalDraws, " draws");

	if(computerWins > playerWins){
		alert("Computer Won");
	}
	if(playerWins > computerWins){
		alert("Player Won");
	}
	if(playerWins == computerWins){
		alert("It was a draw");
	}
	if(totalDraws == 3) {
		alert("It was a draw");
	}
}


















/* GRAVEYARD FIXME:
function computerPlay() {
	
	var randNum = Math.random() * (4-1) + 1;
	var weapon;
	randNum = Math.floor(randNum);
	
	if(randNum == 1) {
		weapon = "rock";	
	}
	if(randNum == 2) {
		weapon = "paper";
	}
	if(randNum == 3) {
		weapon = "scissors";
	}

	return weapon;
}

function playRound(playerSelection, computerSelection) {
	
	if((computerSelection == "rock") && (playerSelection == "rock")) {
		totalDraws++;
		return "Draw";
	}
	if((computerSelection == "paper") && (playerSelection == "rock")){
		computerWins++;
		return "You lose, paper beats rock";
	}
	if((computerSelection== "scissors") && (playerSelection == "rock")){
		playerWins++;
		return "You win, rock beats scissors";
	}
	if((computerSelection == "rock") && (playerSelection == "paper")) {
		playerWins++;
		return "You win, paper beats rock";
	}
	if((computerSelection == "paper") && (playerSelection == "paper")){
		totalDraws++;
		return "Draw";
	}
	if((computerSelection== "scissors") && (playerSelection == "paper")){
		computerWins++;
		return "You lose, scissors beats paper";
	}
	if((computerSelection == "rock") && (playerSelection == "scissors")) {
		computerWins++;
		return "You lose, rock beats scissors";
	}
	if((computerSelection == "paper") && (playerSelection == "scissors")){
		playerWins++;
		return "You win, scissors beats paper";
	}
	if((computerSelection== "scissors") && (playerSelection == "scissors")){
		totalDraws++;
		return "Draw";
	}
		
}

function playerTurn() {

	var exitCode = 0;
	var playerSelection;
	while (exitCode == 0){

		playerSelection = prompt("Choose a sign");
		if(playerSelection == "rock" ){
			exitCode = 1;
			return "rock";
		}
		if(playerSelection == "paper" ){
			exitCode = 1;
			return "paper";
		}
		if(playerSelection == "scissors" ){
			exitCode = 1;
			return "scissors";
		}
	}
	
	
}

function gameOver() {

	console.log("Computer has won ", computerWins, " times");
	console.log("Player has won ", playerWins, " times");
	console.log("There have been ", totalDraws, " draws");

	if(computerWins > playerWins){
		alert("Computer Won");
	}
	if(playerWins > computerWins){
		alert("Player Won");
	}
	if(playerWins == computerWins){
		alert("It was a draw");
	}
	if(totalDraws == 3) {
		alert("It was a draw");
	}
}


function game() {
	var playerSelection = playerTurn();
	var computerSelection = computerPlay();

	var rounds = 1;
	
	while(rounds <= 5){
		var computerSelection = computerPlay();
		console.log(playRound(playerSelection, computerSelection));
		console.log("Round ", rounds, " finished");
		rounds++;

	}
	gameOver();

}

var computerWins = 0;
var playerWins = 0;
var totalDraws = 0;

game();
*/