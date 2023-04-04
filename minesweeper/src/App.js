import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import Board from './Board.js';

function App() {
  const [board, setBoard] = useState([])
  const bombs = [1, 2, 37,38, 100, 10, 91, 48, 81, 39]

  useEffect( () => {
    // create a new board
    const newBoard = [];
    let count = 1;

      // row = [cell1, cell2, cell3, ..., cell10]
      // row = {rowLevel: 1, cells: [cell1, cell2, cell3,..., cell10]}
      // newBoard = [row0, row1, row2,..., row9]
      // newBoard = [[cell1, cell2, cell3, ..., cell10], [cell11, cell12, cell13, ..., cell20],..., [cell91, cell92, cell93, ..., cell100]]

    // set cells into newBoard
    // iterate 10 times to fill rows
    for(let rowLevel=0; rowLevel<10; rowLevel++){
      let row = [];

      // iterate 10 timesto fill columns
      for(let col=0; col<10; col++){
        let cell = {
          number: count,
          isBomb: false,
          adjacentBombs: 0
        }

        // sets bomb into cell
        if(bombs.includes(cell.number)){
          cell.isBomb = true
        }

        cell.number = count;
        row.push(cell)
        count++
      }
      newBoard.push(row)
    }

    // set adjacentBombs in cell object
    for(let row=0; row<10; row++){
      // newBoard[rowLevel0] = [[cell1, cell2, cell3,..., cell10]]
      for(let col=0; col<10; col++){
        // newBoard[rowLevel0][col0] = cell1 = {number: 1, isBomb: true, adjacentBombs: 1}
        for(let i=-1; i<=1; i++){
          if(!newBoard[row+i]){continue}
          for(let j=-1; j<=1; j++){
            if(!newBoard[row+i][col+j] || (i === 0 && j === 0)){continue}
            else if(newBoard[row+i][col+j].isBomb){
              newBoard[row][col].adjacentBombs++
            }
          }
        }
      }
    }
    setBoard(newBoard)
  }, [])

  console.log('board:\n', board)
  return (
    <div className="App">
      <Board board={board} />
    </div>
  );
}

export default App;
