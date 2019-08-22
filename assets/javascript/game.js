$(document).ready(function() {
    
//Scorecard variables
var wins = 0;
var losses = 0;
var guessNumber = 0;
var yourNumber = 0;
var orangeStone = 0;
var redStone = 0;
var blueStone = 0;
var purpleStone = 0;
var greenStone = 0;
var yellowStone = 0;


//Scorecard text at the start of the game
$("#ScorecardText").text("Click on a stone to start");


//Start Round. Resets target number and the stones's numbers.
function startRound(){
    guessNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    $(".GetThisText").text("Your target:  " + guessNumber);
    
    yourNumber = 0
    $(".YourNumText").text(yourNumber + " : Your number");

    orangeStone = Math.floor(Math.random() * (12 - 1)) + 1;
    $("#orangeStone").val(orangeStone);

    redStone = Math.floor(Math.random() * (12 - 1)) + 1;
    $("#redStone").val(redStone);

    blueStone = Math.floor(Math.random() * (12 - 1)) + 1;
    $("#blueStone").val(blueStone);

    purpleStone = Math.floor(Math.random() * (12 - 1)) + 1;
    $("#purpleStone").val(purpleStone);

    greenStone = Math.floor(Math.random() * (12 - 1)) + 1;
    $("#greenStone").val(greenStone);

    yellowStone = Math.floor(Math.random() * (12 - 1)) + 1;
    $("#yellowStone").val(yellowStone);
}

//Start the game
startRound();


//On each click, the stone's value is added to the yourNumber total
$(".stone").on("click", function(){
    var clickednumber = $(this).val();
    yourNumber = parseInt(yourNumber);
    clickednumber = parseInt(clickednumber);

    yourNumber = yourNumber + clickednumber;
    $(".YourNumText").text(yourNumber + " : Your number");

    //if else statement for winning or losing
    if (yourNumber == guessNumber){
        wins++
        startRound();
        $("#ScorecardText").text("You won!!");
    
    }else if(yourNumber > guessNumber){
        losses++
        startRound();
        $("#ScorecardText").text("You lost, try again!");
    }
    
    //Scoreboard display
    $("#WinsText").text("Wins: " + wins);
    $("#LossesText").text("Losses: " + losses);
    
    })



});