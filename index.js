var count1=0;
var count2=0;
var p1 = prompt("Player 1, Enter your name:");
var p2 = prompt("Player 2, Enter your name:");
document.querySelectorAll("p")[0].innerText=p1+": "+count1;
document.querySelectorAll("p")[1].innerText=p2+": "+count2;


// function
function diceroll() {
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);

  // dice1
  if (randomNumber1 == 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
  } else if (randomNumber1 == 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
  } else if (randomNumber1 == 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
  } else if (randomNumber1 == 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
  } else if (randomNumber1 == 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
  } else {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  }

  // dice2

  if (randomNumber2 == 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  } else if (randomNumber2 == 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  } else if (randomNumber2 == 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  } else if (randomNumber2 == 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  } else if (randomNumber2 == 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  } else {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  }

  // Results

  if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩" + p1 + " Wins";
    count1+=1;
    document.querySelectorAll(".dice p")[0].innerHTML=p1+": "+count1;
  } else {
    document.querySelector("h1").innerHTML = p2 + " Wins 🚩";
    count2+=1;
    document.querySelectorAll(".dice p")[1].innerHTML=p2+": "+count2;
  }
}

function reset(){
  count1=0;
  count2=0;
  document.querySelectorAll("p")[0].innerText=p1+": "+count1;
  document.querySelectorAll("p")[1].innerText=p2+": "+count2;
  document.querySelector("h1").innerHTML = "What u Know bou Rolling Down in the DEEp";
}
