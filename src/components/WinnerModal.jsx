import { Square } from "./Square"

// Muestra el mensaje del ganador o empate
export function WinnerModal({ winner, resetGame }) {
    // Si aún no hay resultado, no muestra nada
    if (winner === null) return null

    // Determina el texto a mostrar
    const winnerText = winner === false ? "Empate 🤝" : `Ganó`

    return (
        <section className='winner'>
            <div className='text'>
                <h2>{winnerText}</h2>

                {/* Si hay un ganador, muestra el símbolo */}
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>

                {/* Botón para reiniciar */}
                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}