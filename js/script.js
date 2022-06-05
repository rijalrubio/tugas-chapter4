const cross = "cross";
const circle = "circle";

const boxElements = document.querySelectorAll(".box");
const resetButton = document.getElementById("reset");

let turn = cross;

startGame();
resetButton.addEventListener ('click', startGame);

function startGame() {
    boxElements.forEach((box) => {
        turn = cross;
        box.classList.remove(circle);
        box.classList.remove(cross);
        box.addEventListener("click", handleClick, { once: true });
    });
}

function handleClick(e) {
    const boxTarget = e.target;
    if (turn === cross) {
        placeMark(boxTarget, turn);
        turn = circle;
    } else {
        placeMark(boxTarget, turn);
        turn = cross;
    }
}

function placeMark(box, currentClass) {
    box.classList.add(currentClass);
}









