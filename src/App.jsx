import './App.css'

const TURNS = {
  X: 'x',
  O: 'o',
}

const board = Array(9).fill(null)

const Square = ({ children, updateBoard, index }) => {
  <div className='square' key={index}>
    { /* Render the turn here */}
    { /* Example: <span>{TURNS.X}</span> */}
  </div>
}

function App() {

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>

      <section className='game'>
        {
          board.map((_, index) => {
            return (
              
            )
          })
        }
      </section>
    </main>
  )

}

export default App
