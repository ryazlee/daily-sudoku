import React from 'react';

export interface TileViewModel {
  // change this to enum later
  value: number;
}

function Tile(props: TileViewModel) {
  return (
    <div style={{ width: "50px", height: "50px" }}>
      <input value={props.value} type="number" style={{ width: "40px", height: "40px" }} />
    </div>
  );
}

export default Tile;