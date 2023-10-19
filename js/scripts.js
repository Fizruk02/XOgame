const gameBoard = document.getElementById('game-board');
const cells = [];
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

let currentPlayer = null;
let gameOver = false;

function selectPlayer(playerSymbol) {
    if (!currentPlayer) {
        currentPlayer = playerSymbol;
        document.getElementById('player-selection').style.display = 'none';
    } else {
        alert('Игрок уже выбран.');
    }
}

for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell-${row}-${col}`;
        cell.dataset.row = row;
        cell.dataset.col = col;
        cells.push(cell);
        cell.addEventListener('click', makeMove);
        gameBoard.appendChild(cell);
    }
}

function makeMove(event) {
    const cell = event.target;
    if (cell.classList.contains('cell') && !cell.textContent && currentPlayer && !gameOver) {
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        const winner = checkWinner();
        if (winner) {
            gameOver = true;
            alert(`Игрок ${winner} выиграл!`);
        }
    }
}

function checkWinner() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
            return cells[a].textContent;
        }
    }
    return '';
    
}