const gameBoard = document.getElementById('game-board');
const cells = [];

let currentPlayer = null;

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
    if (cell.classList.contains('cell') && !cell.textContent && currentPlayer) {
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}