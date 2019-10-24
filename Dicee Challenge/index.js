var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1- 6

var randomImageSelect = "images/dice" + randomNumber1 +".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSelect);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1- 6

var randomImageSelect2 = "images/dice" + randomNumber2 +".png";

var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSelect2);


if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
    document.querySelector("h1").style.color = "#00ff99";
}
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "🎌 Draw! 🎌";
  document.querySelector("h1").style.color = "#ff0000"
}
if(randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
  document.querySelector("h1").style.color = "#00ff99";
}
