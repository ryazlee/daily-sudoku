import React, { useState } from 'react';
import Tile, { TileViewModel } from './Tile';

export interface SquareViewModel {
    index: number
}

function Square(props: SquareViewModel) {
    const [tiles, setTiles] = useState(Array.from(Array(9).keys()).map(i => ({ value: i.toString(), id: i})))
    console.log(tiles.length)

    const buildRow = (tiles: TileViewModel[], rowIndex: number) => {
        let rows = []
        for (let i = 3 * rowIndex; i < 3 * rowIndex + 3; i += 1) {
            rows.push(<td style={{border: "1px solid"}}><Tile {...tiles[i]} /></td>)
        }
        return <tr>{rows}</tr>
    }
    return (
        <table> 
            {buildRow(tiles, 0)}
            {buildRow(tiles, 1)}
            {buildRow(tiles, 2)}
        </table>
    )
}

export default Square;