import React, { useState } from 'react';
import Square, { SquareViewModel } from './Square';
import Tile from './Tile';

function Board() {
  const [squares, setSquares] = useState(Array.from(Array(9).keys()).map(i => ({ index: i })))

  const buildRow = (squares: SquareViewModel[], rowIndex: number) => {
    let rows = []
    for (let i = 3 * rowIndex; i < 3 * rowIndex + 3; i += 1) {
      rows.push(<td><Square {...squares[i]} /></td>)
    }
    return <tr>{rows}</tr>
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