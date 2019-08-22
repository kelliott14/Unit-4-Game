$(document).ready(function() {
//Scorecard variables
var wins = 0;
var losses = 0;
var scorecardText = document.getElementById("ScorecardText");
var yourNumber = 0;
var orangeStone = 0;
var redStone = 0;
var blueStone = 0;
var purpleStone = 0;
var greenStone = 0;
var yellowStone = 0;


//Scorecard reset
function scorecardreset(){
    wins = 0;
    losses = 0;
}

//Start Round. Resets target number and the stones's numbers.
function startRound(){
    var guessNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    $(".GetThisText").text("Your target:  " + guessNumber);
    
    yourNumber = 0
    $(".YourNumText").text(yourNumber + " : Your number so far");

    orangeStone = Math.floor(Math.random() * (12 - 1)) + 1;
    redStone = Math.floor(Math.random() * (12 - 1)) + 1;
    blueStone = Math.floor(Math.random() * (12 - 1)) + 1;
    purpleStone = Math.floor(Math.random() * (12 - 1)) + 1;
    greenStone = Math.floor(Math.random() * (12 - 1)) + 1;
    yellowStone = Math.floor(Math.random() * (12 - 1)) + 1;
}

//Start the game
    startRound();
    console.log("o" + orangeStone)
    console.log("r" + redStone)
    console.log("b" + blueStone)
    console.log("g" + greenStone)
    console.log("p" + purpleStone)
    console.log("y" + yellowStone)

//On click Orange
    $("#orangeStone").on("click", function() {
        yourNumber = yourNumber + orangeStone
        $(".YourNumText").text(yourNumber + " : Your number so far");

    })

//On click Red
$("#redStone").on("click", function() {
    yourNumber = yourNumber + redStone
    $(".YourNumText").text(yourNumber + " : Your number so far");

})

//On click Blue
$("#blueStone").on("click", function() {
    yourNumber = yourNumber + blueStone
    $(".YourNumText").text(yourNumber + " : Your number so far");

})

//On click Green
$("#greenStone").on("click", function() {
    yourNumber = yourNumber + greenStone
    $(".YourNumText").text(yourNumber + " : Your number so far");

})

//On click purple
$("#purpleStone").on("click", function() {
yourNumber = yourNumber + purpleStone
$(".YourNumText").text(yourNumber + " : Your number so far");

})

//On click yellow
$("#yellowStone").on("click", function() {
yourNumber = yourNumber + yellowStone
$(".YourNumText").text(yourNumber + " : Your number so far");

})











});