const board = document.getElementById("board");
const result = document.getElementById("result");
const replay = document.getElementById("replay");

const players = ["O", "X"];
let activePlayer = 0;
const field = ["", "", "", "X", "X", "X", "", "", ""];
const winnersTable = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

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
    checkWinner();
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

function checkWinner() {
  for (let index = 0; index < winnersTable.length; index++) {
    const el = winnersTable[index];
    const isCellsEqual =
      field[el[0]] === field[el[1]] &&
      field[el[1]] === field[el[2]] &&
      field[el[0]] !== "";
    if (isCellsEqual) {
      showResult(field[el[0]] + " win");
    }
  }
}

renderBoard();
