//Variables

$(document).ready(function(){

var targetScore
var finalScore = 100;
var wins = 0;
var losses = 0;
var currentScore = 0;


function startGame(){

	$("#currentScore").html(currentScore);

	$(".crystals").empty();

	targetScore = Math.floor(Math.random() * 69) + 30;
	console.log(targetScore); 
	$("#targetScore").html(targetScore);



	for (var i = 0; i < 4; i++) {
		
		var randomValue = Math.floor(Math.random() * 11) +1;
		console.log ("the value of box " + i + " is " + randomValue);
		
		var crystal = $("<div>");
		crystal.attr({
				"class": "crystalSquares",
				"data-randomValue": randomValue
		})



		crystal.css({
			"background-image": "url(assets/images/red_diamond.jpg)",
			"background-size": "cover",
			"background-position": "center"
		})

		
		$(".crystals").append(crystal);

	}
}
startGame();

$(document).on("click", ".crystalSquares", function(){
	console.log($(this));

	var crystalValue = parseInt($(this).attr("data-randomValue"));

	currentScore = currentScore + crystalValue;
	$("#currentScore").html(currentScore);

	if (currentScore > targetScore) {
		alert("You lose.  Better luck next time")
		losses++;
		$("#losses").html("losses: " + losses)
		currentScore = 0;
		startGame();
	} 
	else if (currentScore === targetScore){
		alert("Congratulations! You win!");
		wins++;
		$("#wins").html("Wins: " + wins);
		currentScore = 0;
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