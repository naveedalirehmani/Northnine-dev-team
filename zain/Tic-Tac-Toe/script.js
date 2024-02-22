let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let draw = document.querySelector("#draw")
let img = document.querySelector(".win-img")
let turnMessage = document.querySelector("#turn-msg");


let turnO = true; //playerX, playerY

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const moveSound = document.getElementById("moveSound");
const winSound = document.getElementById("winSound");
const drawSound = document.getElementById("drawSound");

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    updateTurnMessage();
};

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
};

const showWinner = (Winner) => {
    msg.innerHTML = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    img.classList.remove("win-img")

    winSound.play();
    disabledBoxes();
};

const playDrawSound = () => {
    drawSound.play();
};

const isDraw = () => {
    for (let box of boxes) {
        if (box.innerHTML === "") {
            return false;
        }
    }
    return true;
};

const showDraw = () => {
    msg.innerHTML = "Oops, the match is a draw!";
    msgContainer.classList.remove("hide");
    img.classList.add("win-img")

    disabledBoxes();
};

const checkWinner = () => {
    let isGameDraw = isDraw();

    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return;
            }
        }
    }

    if (isGameDraw) {
        playDrawSound();
        showDraw();
    }
};


const updateTurnMessage = () => {
    turnMessage.innerHTML = `Player ${turnO ? 'O' : 'X'}'s turn`;
};

updateTurnMessage();
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
            box.classList.add("firstColor")
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        moveSound.play();

        checkWinner();
        updateTurnMessage();
    });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

