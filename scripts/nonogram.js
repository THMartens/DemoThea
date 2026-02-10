// Hardcoded solution
const SIZE = 50;
const CLUE_COLS = 6; 
const CLUE_ROWS = 6; 


const playerGrid = Array.from({ length: SIZE }, () =>
  Array(SIZE).fill(0)
);

const solutionGrid = Array.from({ length: SIZE }, () =>
  Array(SIZE).fill(0)
);

solutionGrid[10][10] = 1;
solutionGrid[10][11] = 1;

// Clues (hardcoded)
const rowClues = [
  [3, 1, 2],
  [5],
  [],
];

const colClues = [
  [2],
  [1, 1],
];

// Helper functions to get clues
function getRowClue(row, index) {
  const clues = rowClues[row] || [];
  return clues[index] ?? '';
}

function getColumnClue(col, index) {
  const clues = colClues[col] || [];
  return clues[clues.length - CLUE_ROWS + index] ?? '';
}

// Build the grid UI
const grid = document.getElementById('nonogram');

for (let row = 0; row < SIZE + CLUE_ROWS; row++) {
  for (let col = 0; col < SIZE + CLUE_COLS; col++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    // Top-left empty corner
    if (row < CLUE_ROWS && col < CLUE_COLS) {
      cell.classList.add('clue');
    }

    // Top clues
    else if (row < CLUE_ROWS) {
      cell.classList.add('clue');
      cell.textContent = getColumnClue(col - CLUE_COLS, row);
    }

    // Left clues
    else if (col < CLUE_COLS) {
      cell.classList.add('clue');
      cell.textContent = getRowClue(row - CLUE_ROWS, col);
    }

    // Puzzle cells
    else {
      const x = col - CLUE_COLS;
      const y = row - CLUE_ROWS;

      cell.classList.add('puzzle');
      cell.addEventListener('click', () => toggleCell(cell, x, y));
    }

    grid.appendChild(cell);
  }
}


// Render cell state
function renderCell(cell, state) {
  cell.classList.remove('filled', 'dot');

  if (state === 1) cell.classList.add('filled');
  if (state === 2) cell.classList.add('dot');
}

// Render clues
const topClues = document.getElementById('topClues');
const leftClues = document.getElementById('leftClues');

colClues.forEach(col => {
  const div = document.createElement('div');
  div.textContent = col.join('\n');
  topClues.appendChild(div);
});

rowClues.forEach(row => {
  const div = document.createElement('div');
  div.textContent = row.join(' ');
  leftClues.appendChild(div);
});

// Check function
function checkSolved() {
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (playerGrid[y][x] === 1 && solutionGrid[y][x] !== 1) {
        return false;
      }
      if (solutionGrid[y][x] === 1 && playerGrid[y][x] !== 1) {
        return false;
      }
    }
  }
  return true;
}

document.getElementById('checkBtn').addEventListener('click', () => {
  const solved = checkSolved();
  document.getElementById('result').textContent =
    solved ? '✅ Puzzle solved!' : '❌ Not correct yet';
});
