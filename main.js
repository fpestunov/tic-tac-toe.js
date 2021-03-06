const board = document.getElementById("board");
const result = document.getElementById("result");
const replay = document.getElementById("replay");

let isGameOver = false;
const players = ["O", "X"];
let activePlayer = 0;
const field = ["", "", "", "", "", "", "", "", ""];
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
  isGameOver = false;
  showResult("");
  resetField();
  renderBoard();
});

function resetField() {
  for (let index = 0; index < field.length; index++) {
    field[index] = "";
  }
}

board.addEventListener("click", function (event) {
  if (isGameOver) {
    return;
  }

  const targetData = event.target.dataset;
  if (targetData.cell && field[targetData.cell] === "") {
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
      isGameOver = true;
      return;
    }
  }

  if (field.filter((item) => item === "").length === 0) {
    showResult("tie");
    isGameOver = true;
  }
}

renderBoard();
