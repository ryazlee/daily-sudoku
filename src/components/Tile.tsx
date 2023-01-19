import React, { ChangeEvent, useState } from 'react';

export interface TileViewModel {
  // change this to enum later
  value: string,
  tileIndex: number,
  squareIndex: number
  onMouseOverTile: (square: number, tile: number) => void
}

function Tile(props: TileViewModel) {
  const [value, setValue] = useState(props.value)
  const [bgColor, setBgColor] = useState("")

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedNum = Number(event.target.value) ?? 0
    // only update the box if the value is between 1 and 9
    if (updatedNum <= 9 && updatedNum >= 1) {
      setValue(event.target.value)
    } else if (updatedNum === 0) {
      setValue("")
    }
  }

  const onMouseEnter = () => {
    props.onMouseOverTile(props.squareIndex, props.tileIndex)
    setBgColor("orange")
  }

  const onMouseLeave = () => {
    setBgColor("")
  }

  return (
    <div style={{ width: "50px", height: "50px" }}>
      <input
        value={value}
        type="number"
        pattern="[0-9]"
        style={{ width: "40px", height: "40px", backgroundColor: bgColor }}
        onChange={onValueChange}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave} />
    </div>
  );
}

export default Tile;