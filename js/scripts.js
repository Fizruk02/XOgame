const gameBoard = document.getElementById('game-board');
const cells = [];

for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell-${row}-${col}`;
        cell.dataset.row = row;
        cell.dataset.col = col;
        cells.push(cell);
        gameBoard.appendChild(cell);
    }
}

let currentPlayer = 'X';

gameBoard.addEventListener('click', (event) => {
    const cell = event.target;
    if (cell.classList.contains('cell') && !cell.textContent) {
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});