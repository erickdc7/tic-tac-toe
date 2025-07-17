// Símbolos para los turnos de los jugadores
export const TURNS = {
    X: '⨉',
    O: '○'
}

// Todas las combinaciones ganadoras posibles (filas, columnas, diagonales)
export const WINNER_COMBOS = [
    [0, 1, 2], // fila superior
    [3, 4, 5], // fila del medio
    [6, 7, 8], // fila inferior
    [0, 3, 6], // columna izquierda
    [1, 4, 7], // columna central
    [2, 5, 8], // columna derecha
    [0, 4, 8], // diagonal principal
    [2, 4, 6], // diagonal secundaria
]