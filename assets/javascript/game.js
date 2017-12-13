//Variables

$(document).ready(function(){

var targetScore
var finalScore = 100;
var wins = 0;
var losses = 0;
var currentScore = 0;

function startGame(){

	$(".crystals").empty();

	targetScore = Math.floor(Math.random() * 69) + 30;
	console.log(targetScore); 
	$("#result").html("Target Score: " + targetScore);



	for (var i = 0; i < 4; i++) {
		
		var randomValue = Math.floor(Math.random() * 11) +1;
		console.log ("the value of box " + i + " is " + randomValue);
		
		var crystal = $("<div>");
		crystal.attr({
				"class": "crystalSquares",
				"data-randomValue": randomValue
		})

		crystal.html(randomValue);
		
		$(".crystals").append(crystal);

	}
}
startGame();

$(".crystalSquares").on("click", function(){
	console.log($(this));

	var crystalValue = parseInt($(this).attr("data-randomValue"));

	currentScore = currentScore + crystalValue;
	console.log("current score is " + currentScore);

	if (currentScore > targetScore) {
		console.log("You lose")
		losses++;
		$("#losses").html("losses: " + losses)
		previous = 0;
		startGame();
	} 
	else if (currentScore === targetScore){
		console.log("You win!");
		wins++;
		$("#wins").html("Wins: " + wins);
		previous = 0;
		startGame();
	}

})

})
//pseudo coding
//game starts with 4 crystals
// Every crystal needs to have a random number between 1-12
// every time the game is won or lost, assign the crystals a new random number
// When clicking on any crystal, it should add the random value to the previous 
// Result until it equals or exceeds the total score
// If it equals the chosen score, then we increment a win counter