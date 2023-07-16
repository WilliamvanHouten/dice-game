//declaring the variables
const dice = document.getElementById("dice-btn");
const player1Name = document.getElementById("player1-name");
const player2Name = document.getElementById("player2-name");

// Create audio elements
const winSound = new Audio("audio/winSound.wav");
const drawSound = new Audio("audio/drawSound.mp3");
const errorSound = new Audio("audio/drawSound.mp3");

//create the game
function dicegame() {
  //dice 1
  let randomDice = Math.floor(Math.random() * 6 + 1);
  let diceLocation = "images/" + "dice-" + randomDice + ".png";
  let img1 = document.querySelectorAll("img")[0];
  img1.setAttribute("src", diceLocation);

  //dice 2
  let randomDice2 = Math.floor(Math.random() * 6 + 1);
  let diceLocation2 = "images/" + "dice-" + randomDice2 + ".png";
  let img2 = document.querySelectorAll("img")[1];
  img2.setAttribute("src", diceLocation2);

  //Player names
  let player1 = player1Name.value.trim() || "Player 1";
  let player2 = player2Name.value.trim() || "Player 2";

  // if p1 wins
  if (randomDice > randomDice2) {
    document.querySelector("h1").innerHTML = player1 + " Wins!";
    winSound.play();
  }
  // if p2 wins
  else if (randomDice < randomDice2) {
    document.querySelector("h1").innerHTML = player2 + " Wins!";
    winSound.play();
  }
  // if draw
  else if (randomDice === randomDice2) {
    document.querySelector("h1").innerHTML = "Match Draw!";
    drawSound.play();
  }
  // error
  else {
    document.querySelector("h1").innerHTML = "Oops! An error has occurred.";
    drawSound.play();
  }
}
