import { useState } from 'react'
import Board from './Board'
import './App.css'

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const [victor, setVictor] = useState("")
  function switchCurrentPlayer() {
    setCurrentPlayer(currentPlayer => {
      return currentPlayer === "X" ? "O" : "X"
    })
  }
  return (
    <>
      <h1>TicTacToe</h1>
      <h3>Current Player: {currentPlayer}</h3>
      <Board
        currentPlayer={currentPlayer} 
        switchCurrentPlayer={switchCurrentPlayer} 
        setVictor={setVictor}
      />
      <h3>
        {
          victor?`Victor is ${victor}!`:' ' 
        }
      </h3>
    </>
  )
}

export default App
