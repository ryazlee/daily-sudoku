import React, { useState, useEffect, useRef } from 'react';
import Square, { SquareViewModel } from './Square';

function Board() {
  const [squares, setSquares] = useState(Array.from(Array(9).keys()).map(i => ({ squareIndex: i })))
  const [selectedSquare, setSelectedSquare] = useState([0, 0])

  useEffect(() => {
    console.log(selectedSquare)
  }, [selectedSquare])

  const buildRow = (squares: { squareIndex: number }[], rowIndex: number) => {
    let rows = []
    for (let i = 3 * rowIndex; i < 3 * rowIndex + 3; i += 1) {
      rows.push(<td><Square {...squares[i]} onMouseOverTile={onMouseOverTile} /></td>)
    }
    return <tr>{rows}</tr>
  }

  const onMouseOverTile = (square: number, tile: number) => {
    setSelectedSquare([square, tile])
  }

  return (
    <table>
      {buildRow(squares, 0)}
      {buildRow(squares, 1)}
      {buildRow(squares, 2)}
    </table>
  )
}

export default Board;