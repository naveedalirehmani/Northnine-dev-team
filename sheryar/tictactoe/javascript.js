const boxes = document.querySelectorAll(".box");
const resetButton = document.querySelector(".reset-btn");
const newGameButton = document.querySelector("#new-btn");
const messageContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");

function playMusic(sound) {
  let audio = new Audio(sound);
  audio.play();
}

let turno = true;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turno = true;
  enableBoxes();
  messageContainer.classList.add("hide");
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations! your the winner of the match ${winner} `;
  messageContainer.classList.remove("hide");
  disableBoxes();
};

const showDraw = () => {
  msg.innerText = "The game is a draw try again";
  messageContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
        playMusic("./sound/winning sound.mp3");
        return true;
      }
    }
  }
  return false;
};

const checkDraw = () => {
  for (let box of boxes) {
    if (box.innerText === "") {
      return false;
    }
  }
  return true;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno && box.innerText === "") {
      box.innerText = "O";
      turno = false;
    } else if (!turno && box.innerText === "") {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    playMusic("./sound/punch.mp3");

    if (!checkWinner() && checkDraw()) {
      showDraw();
      playMusic("./sound/wrong.mp3");
    }
  });
});

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
