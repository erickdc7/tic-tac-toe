// Guarda el estado actual del tablero y turno en localStorage
export const saveGameToStorage = ({ board, turn }) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

// Elimina los datos del juego guardados
export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}