// constantes (LOGICA)
const ROWS = Number(getComputedStyle(document.documentElement).getPropertyValue('--num-rows')); // con esto se trae las variables de css
const COLUMNS = Number(getComputedStyle(document.documentElement).getPropertyValue('--num-columns'));
const PIECES = {
    rook: "♜",
    knight: "♞",
    bishop: "♝",
    king: "♚",
    queen: "♛",
    pawn: "♟"
}

const COLORS_PIECES = {
    light: "light",
    dark: "dark"
}


// Función para crear matrix del tablero (LOGICA)
function createBoardMatrix(rows, columns) {
    const boardMatrix = [];

    for (let row = 0; row < rows; row++) {
        boardMatrix[row] = Array(columns).fill(0);
    }

    return boardMatrix;
}

// Función para inicializar el tablero con las piezas (LOGICA)
function initializeBoardMatrix(boardMatrix) {

    // piezas blancas
    for (let i = 0; i < COLUMNS; i++) {
        boardMatrix[1][i] = {
            type: PIECES.pawn,
            color: COLORS_PIECES.light
        }
    }

    boardMatrix[0][0] = { type: PIECES.rook, color: COLORS_PIECES.light }
    boardMatrix[0][1] = { type: PIECES.knight, color: COLORS_PIECES.light }
    boardMatrix[0][2] = { type: PIECES.bishop, color: COLORS_PIECES.light }
    boardMatrix[0][3] = { type: PIECES.king, color: COLORS_PIECES.light }
    boardMatrix[0][4] = { type: PIECES.queen, color: COLORS_PIECES.light }

    boardMatrix[0][5] = { type: PIECES.bishop, color: COLORS_PIECES.light }
    boardMatrix[0][6] = { type: PIECES.knight, color: COLORS_PIECES.light }
    boardMatrix[0][7] = { type: PIECES.rook, color: COLORS_PIECES.light }

    // piezas negras
    for (let i = 0; i < COLUMNS; i++) {
        boardMatrix[6][i] = {
            type: PIECES.pawn,
            color: COLORS_PIECES.dark
        }
    }

    boardMatrix[7][0] = { type: PIECES.rook, color: COLORS_PIECES.dark }
    boardMatrix[7][1] = { type: PIECES.knight, color: COLORS_PIECES.dark }
    boardMatrix[7][2] = { type: PIECES.bishop, color: COLORS_PIECES.dark }
    boardMatrix[7][3] = { type: PIECES.king, color: COLORS_PIECES.dark }
    boardMatrix[7][4] = { type: PIECES.queen, color: COLORS_PIECES.dark }

    boardMatrix[7][5] = { type: PIECES.bishop, color: COLORS_PIECES.dark }
    boardMatrix[7][6] = { type: PIECES.knight, color: COLORS_PIECES.dark }
    boardMatrix[7][7] = { type: PIECES.rook, color: COLORS_PIECES.dark }

}

function renderBoard() {
    const $board = document.getElementById("board");
    // $board.innerHTML = "";

    // crear celdas en el tablero (VISUAL)
    for (let row = 0; row < ROWS; row++) {

        for (let column = 0; column < COLUMNS; column++) {
            const $cell = document.createElement("div");

            // asignar un ID a cada celda (A1,B1,C1...A8,B8,C8...)
            // Convertir el número de columna a una letra
            const columnLetter = String.fromCharCode(65 + column);

            // Concatenar la letra de la columna con el número de fila
            const cellId = columnLetter + (8 - row)

            // asignar el ID a la celda
            $cell.setAttribute("id", cellId);

            // asignar color a cada celda usando clases css
            $cell.classList.add((row + column) % 2 ? "cell-dark-color" : "cell-light-color");

            // asignar el color de las piezas
            if (boardMatrix[row][column]) {
                $cell.classList.add(boardMatrix[row][column].color === "light" ? "piece-light-color" : "piece-dark-color");
                $cell.textContent = boardMatrix[row][column].type;
            }

            $board.appendChild($cell);
        }
    }
}


// crear logica del tablero y renderizarlo
const boardMatrix = createBoardMatrix(ROWS, COLUMNS);
initializeBoardMatrix(boardMatrix);
renderBoard(boardMatrix);






