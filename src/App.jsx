import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'

import './App.css'

function App() {
  // Estado del tablero. Si hay datos guardados en localStorage, los carga.
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board')
    if (boardFromLocalStorage) return JSON.parse(boardFromLocalStorage)
    return Array(9).fill(null)
  })

  // Estado del turno actual (X o O), también se carga desde localStorage si existe.
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage ?? TURNS.X
  })

  // Estado del ganador. Puede ser 'X', 'O', false (empate) o null (juego en curso).
  const [winner, setWinner] = useState(null)

  // Reinicia el juego a su estado inicial y borra los datos del almacenamiento.
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  // Maneja la lógica cuando se hace clic en un cuadro.
  const updateBoard = (index) => {
    // Si ya hay un valor en ese cuadro o ya hay un ganador, no hace nada.
    if (board[index] || winner) return

    // Copia el tablero actual y actualiza la posición clickeada.
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambia el turno.
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Guarda el estado actual del juego en localStorage.
    saveGameToStorage({ board: newBoard, turn: newTurn })

    // Verifica si hay un ganador.
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti() // Efecto visual de victoria 🎉
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Si no hay espacios vacíos, es un empate.
    }
  }

  return (
    <>
      <main className="board">
        <h1>Tic-Tac-Toe</h1>

        {/* Muestra el turno actual */}
        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>

        {/* Muestra el tablero */}
        <section className='game'>
          {
            board.map((_, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>
              )
            })
          }
        </section>

        {/* Botón para reiniciar el juego */}
        <button onClick={resetGame}>Reiniciar</button>
      </main>

      {/* Modal que se muestra si hay un ganador o empate */}
      <WinnerModal resetGame={resetGame} winner={winner} />
    </>

  )
}

export default App
