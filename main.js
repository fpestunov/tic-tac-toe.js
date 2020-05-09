const board = document.getElementById("board");
const result = document.getElementById("result");
const replay = document.getElementById("replay");

const field = ["", "X", "", "O", "", "", "", "", ""];

function showResult(msg) {
  result.innerText = msg ? "Result: " + msg : msg;
}

replay.addEventListener("click", function () {
  showResult("");
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
