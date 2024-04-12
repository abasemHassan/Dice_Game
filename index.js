var player1RandomNumber = Math.floor(Math.random()*6)+1;
var player2RandomNumber = Math.floor(Math.random()*6)+1;


var img1 = document.querySelector(".img1").setAttribute("src","./images/dice"+player1RandomNumber+".png");
var img2 = document.querySelector(".img2").setAttribute("src","./images/dice"+player2RandomNumber+".png");

if (player1RandomNumber > player2RandomNumber) {
    document.querySelector("h1").innerHTML ="🚩Player 1 Wins !";
}
else if (player1RandomNumber < player2RandomNumber) {
    document.querySelector("h1").innerHTML ="Player 2 Wins !🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw! 🤝";
}