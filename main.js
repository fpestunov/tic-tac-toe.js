const board = document.getElementById("board");
const result = document.getElementById("result");
const replay = document.getElementById("replay");

const players = ["O", "X"];
let activePlayer = 0;
const field = ["", "X", "", "O", "", "", "", "", ""];

function showResult(msg) {
  result.innerText = msg ? "Result: " + msg : msg;
}

replay.addEventListener("click", function () {
  showResult("");
});

board.addEventListener("click", function (event) {
  const targetData = event.target.dataset;
  if (targetData.cell && field[targetData.cell] === "") {
    console.log("click ", targetData.cell);
    field[targetData.cell] = players[activePlayer];
    activePlayer = activePlayer ? 0 : 1;
    renderBoard();
  }
});

function renderBoard() {
  board.innerText = "";
  for (let index = 0; index < 9; index++) {
    const div = document.createElement("div");
    div.setAttribute("data-cell", index);
    div.innerText = field[index];
    board.append(div);
  }
}

renderBoard();
