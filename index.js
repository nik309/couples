const board = document.querySelector('.board');
const button_start = document.querySelector('.board__button');
const inputin = document.querySelector('.board__input');

function createBoard() {
    board.textContent = "";
}

button_start.addEventListener("click", (Event) => {
    Event.preventDefault();
    let innomber = +inputin.value;
    if (innomber >= 2 && innomber <= 6 && innomber % 2 == 0) {
        let count = innomber * innomber;
    }
    else {
        inputin.value = 4;
    }
    createBoard();
});
