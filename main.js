var scores, roundScore, currentPlayer, gameRunning;

init();

document.querySelector(".btn-new").addEventListener("click", init);

document.querySelector(".btn-roll").addEventListener("click", function() {

	if (gameRunning) {
		// 1. Get a Rand Num
		var dice = Math.floor(Math.random() * 6) + 1;

		// 2. Display Result in Dice Pic
		var diceDOM = document.querySelector(".dice")
		diceDOM.style.display = "block";
		diceDOM.src = "dice-" + dice + ".png";

		// 3. Update roundScore
		if (dice !== 1) {
			// Add Score
			roundScore += dice;
			document.querySelector("#current-" + currentPlayer).textContent = roundScore;

		// 4. Next Player
		} else {
			nextPlayer()
		}
	}
});

function nextPlayer() {
	currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
	roundScore = 0;
	document.querySelector("#current-0").textContent = "0";
	document.querySelector("#current-1").textContent = "0";
	document.querySelector(".player-0-panel").classList.toggle("active");
	document.querySelector(".player-1-panel").classList.toggle("active");
	document.querySelector(".dice").style.display = "none";
};

document.querySelector(".btn-hold").addEventListener("click", function() {
	
	if (gameRunning) {
	// 1. add score
	scores[currentPlayer] += roundScore;
	document.querySelector("#score-" + currentPlayer).textContent = scores[currentPlayer];
		// if winner
		if (scores[currentPlayer] >= 20) {
			endGame();
		} else {
			nextPlayer();
		}
	}
});

function endGame() {
	document.querySelector("#name-" + currentPlayer).textContent = "Winner !"
	document.querySelector(".player-" + currentPlayer + "-panel").classList.remove("active");
	document.querySelector(".player-" + currentPlayer + "-panel").classList.add("winner");
	document.querySelector(".dice").style.display = "none";
	gameRunning = false;
};

function init() {
	scores = [0, 0];
	roundScore = 0;
	currentPlayer = 0;
	gameRunning = true;

	document.querySelector(".dice").style.display = "none";
	document.querySelector("#current-0").textContent = "0";
	document.querySelector("#current-1").textContent = "0";
	document.querySelector("#score-0").textContent = "0";
	document.querySelector("#score-1").textContent = "0";
	document.querySelector(".player-0-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("winner");
	document.querySelector(".player-0-panel").classList.remove("active");
	document.querySelector(".player-1-panel").classList.remove("active");
	document.querySelector(".player-0-panel").classList.add("active");
	document.querySelector("#name-0").textContent = "Player 1";
	document.querySelector("#name-1").textContent = "Player 2";
};