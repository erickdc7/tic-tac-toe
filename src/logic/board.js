import { WINNER_COMBOS } from '../constants.js'

// Verifica si hay una combinación ganadora en el tablero
export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo

        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a] // Devuelve 'X' u 'O'
        }
    }
    return null // No hay ganador
}

// Verifica si el juego terminó en empate (todas las casillas ocupadas)
export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}