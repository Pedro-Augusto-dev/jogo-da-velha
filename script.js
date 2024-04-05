const currentPlayer = document.querySelector(".currentPlayer");

let selected;
let player = "X";

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function init() {
  selected = [];

  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();

function newMove(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = player;
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  setTimeout(() => {
    check();
  }, [100]);

  player = player === "X" ? "O" : "X";
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

function check() {
  let playerLastMove = player === "X" ? "O" : "X";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert("O JOGADOR '" + playerLastMove + "' GANHOU!");
      init();
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    alert("DEU EMPATE!");
    init();
    return;
  }
}

function dia(){

    var clean = document.getElementById("clean");
    clean.style.display = "none"
    
    var black = document.getElementById("noite");
    black.style.display = "block";

    var darken = document.getElementById("body");
    darken.style.backgroundColor = "rgb(56, 54, 54)";
    
    var color = document.getElementById("scrit")
    color.style.color = "white";

    var color2 = document.getElementById("scrit2");
    color2.style.color = "white";

    var back = document.getElementById("backColor")
    back.style.background = "white";
    back.style.border = "1px solid white";  
}
function night(){

  var black = document.getElementById("noite");
  black.style.display = "none";
  
  var clean = document.getElementById("clean");
    clean.style.display = "block"

  var darken = document.getElementById("body");
  darken.style.backgroundColor = "rgb(239, 235, 228)"; 

  var color = document.getElementById("scrit")
  color.style.color = "black";

  var color2 = document.getElementById("scrit2");
  color2.style.color = "black";

  var back = document.getElementById("backColor")
    back.style.background = "black";
    back.style.border = "1px solid black";  
}

