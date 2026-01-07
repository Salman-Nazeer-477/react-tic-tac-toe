import { useState, useEffect } from 'react'
export default function Board({ switchCurrentPlayer, currentPlayer, setVictor }) {
    const [board, setBoard] = useState(Array(9).fill(null))

    if(board[0] || board[4] || board[8]){
        // Horizontal
        if(board[0] === board[1] && board[1] === board[2]) setVictor(board[0])
        if(board[3] === board[4] && board[4] === board[5]) setVictor(board[3])
        if(board[6] === board[7] && board[7] === board[8]) setVictor(board[6])
        // Vertical
        if(board[0] === board[3] && board[3] === board[6]) setVictor(board[0])
        if(board[1] === board[4] && board[4] === board[7]) setVictor(board[1])
        if(board[2] === board[5] && board[5] === board[8]) setVictor(board[2])
        // Diagonal
        if(board[0] === board[4] && board[4] === board[8]) setVictor(board[0])
        if(board[2] === board[4] && board[4] === board[6]) setVictor(board[2])
    }
    function updateBox(i, currentPlayer) {
        if (board[i] !== null) return
        setBoard(board => {
            board[i] = currentPlayer
            return board
        })
        switchCurrentPlayer()
    }

    function resetBoard(){
        setBoard(Array(9).fill(null))
        if(currentPlayer==="O") switchCurrentPlayer()
    }
    

    return (
        <>
            <div className="row">
                <button onClick={() => { updateBox(0, currentPlayer) }} className="box">{board[0]}</button>
                <button onClick={() => { updateBox(1, currentPlayer) }} className="box">{board[1]}</button>
                <button onClick={() => { updateBox(2, currentPlayer) }} className="box">{board[2]}</button>
            </div>
            <div className="row">
                <button onClick={() => { updateBox(3, currentPlayer) }} className="box">{board[3]}</button>
                <button onClick={() => { updateBox(4, currentPlayer) }} className="box">{board[4]}</button>
                <button onClick={() => { updateBox(5, currentPlayer) }} className="box">{board[5]}</button>
            </div>
            <div className="row">
                <button onClick={() => { updateBox(6, currentPlayer) }} className="box">{board[6]}</button>
                <button onClick={() => { updateBox(7, currentPlayer) }} className="box">{board[7]}</button>
                <button onClick={() => { updateBox(8, currentPlayer) }} className="box">{board[8]}</button>
            </div>
            <div><button onClick={ resetBoard }>Reset</button></div>
        </>
    )
}