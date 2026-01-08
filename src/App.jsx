import { useState } from 'react'
import './index.css'
function Square({face, onSquareClick}){
  return <button onClick={onSquareClick} className="square">{face}</button>
}

function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  function handleClick(i){
    if(squares[i] || calculateWinner(squares)) return
    const newSquares = squares.slice()
    newSquares[i] = xIsNext?"X":"O"
    setSquares(newSquares)
    setXIsNext(!xIsNext)
  }
  function resetGame(){
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }
  const winner = calculateWinner(squares)
  let status
  if(winner) status = 'Winner:' + winner
  else status = 'Next Player:' + (xIsNext?'X':'O')
  return (
    <>
      <div className="staus">{status}</div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(0)} face={squares[0]}/>
        <Square onSquareClick={() => handleClick(1)} face={squares[1]}/>
        <Square onSquareClick={() => handleClick(2)} face={squares[2]}/>
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(3)} face={squares[3]}/>
        <Square onSquareClick={() => handleClick(4)} face={squares[4]}/>
        <Square onSquareClick={() => handleClick(5)} face={squares[5]}/>
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(6)} face={squares[6]}/>
        <Square onSquareClick={() => handleClick(7)} face={squares[7]}/>
        <Square onSquareClick={() => handleClick(8)} face={squares[8]}/>
      </div>
      <button onClick={resetGame} className="reset">Reset Game</button>
    </>
  )
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for(let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i]
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) return squares[a]
  }
  return null
}

function App(){
  return (
    <>
      <Board />
    </>
  )
}

export default App
