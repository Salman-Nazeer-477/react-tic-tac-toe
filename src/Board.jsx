import { useState } from 'react'
export default function Board({switchCurrentPlayer, currentPlayer}){

    const [board, setBoard] = useState([
                                        ' ', ' ', ' ',
                                        ' ', ' ', ' ',
                                        ' ', ' ', ' ',
                                    ])

    function updateBox(i, currentPlayer){
        setBoard(board => {
            board[i] = currentPlayer
            return board
        })
        switchCurrentPlayer()
    }
    return (
        <>
            <div className="row">
                <button onClick={() => {updateBox(0, currentPlayer)}} className="box">{board[0]}</button>
                <button onClick={() => {updateBox(1, currentPlayer)}} className="box">{board[1]}</button>
                <button onClick={() => {updateBox(2, currentPlayer)}} className="box">{board[2]}</button>
            </div>
            <div className="row">
                <button onClick={() => {updateBox(3, currentPlayer)}} className="box">{board[3]}</button>
                <button onClick={() => {updateBox(4, currentPlayer)}} className="box">{board[4]}</button>
                <button onClick={() => {updateBox(5, currentPlayer)}} className="box">{board[5]}</button>
            </div>
            <div className="row">
                <button onClick={() => {updateBox(6, currentPlayer)}} className="box">{board[6]}</button>
                <button onClick={() => {updateBox(7, currentPlayer)}} className="box">{board[7]}</button>
                <button onClick={() => {updateBox(8, currentPlayer)}} className="box">{board[8]}</button>
            </div>
        </>
    )
}