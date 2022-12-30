var player1 = 0;
var player2 = 0;

player1 = Math.floor(Math.random() * 6)+1;
player2 = Math.floor(Math.random() * 6)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+player1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+player2+".png");

if (player1 === player2) {
    document.querySelector("h1").textContent ="Draw!";
  } else if (player1 > player2) {
    document.querySelector("h1").textContent = "Player1 Wins!";
  } else {
    document.querySelector("h1").textContent = "Player2 Wins!";
  }