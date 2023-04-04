import { useState } from 'react';

export default function Board({ board }) {
  const [clickedCells, setClickedCells] = useState([])

  const clickHandler = (cell) => {
    console.log('clicked cell: ', cell)
    setClickedCells(...cell)
  }

  return (
    <div className="container">
      {
        board.map((row, index) => (
          <div key={index} className="row" style={{ height: '64px', width: '642px', border: '1px solid black' }} >
            {
              row.map((cell, ind) => (
                <div key={ind} className="col-sm" style={{ maxWidth: '64px', border: '1px solid gray' }} onClick={() => clickHandler(cell)}>
                  {cell.number}
                  {cell.isBomb && <img src='https://icons.veryicon.com/png/Object/Nova/Bomb.png' alt='bomb' style={{width:'35px', height:'35px'}} /> }
                  {clickedCells.includes(cell) && <p>clicked</p>}
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}