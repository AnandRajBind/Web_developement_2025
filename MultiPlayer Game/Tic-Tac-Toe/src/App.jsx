
import React from 'react'
import Square from './Square/Square'
import './App.css'
import { useState, useEffect } from 'react'

// Dummy data for rendering squares
const renderFrom = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function App() {
  const [gameState, setGameState] = useState(renderFrom)
  const [currentPlayer, setCurrentPlayer] = useState("circle");
  const [finishState, setFinishState] = useState(false);
  const [finishedArrayState, setFinishedArrayState] = useState([]);
  const [playOnline, setPlayonline] = useState(false);
  const checkWinner = () => {
    // row dynamic check
    for (let row = 0; row < gameState.length; row++) {
      if (gameState[row][0] === gameState[row][1] && gameState[row][1] === gameState[row][2]) {
        // Winning squares ke index store karna
        setFinishedArrayState([row * 3 + 0, row * 3 + 1, row * 3 + 2]);
        return gameState[row][0];
      }

    }
    // column dynamic check
    for (let col = 0; col < gameState.length; col++) {
      if (gameState[0][col] === gameState[1][col] && gameState[1][col] === gameState[2][col]) {

        setFinishedArrayState([0 * 3 + col, 1 * 3 + col, 2 * 3 + col]);

        return gameState[0][col];
      }
    }
    // Dialonal check
    if (gameState[0][0] === gameState[1][1] && gameState[1][1] === gameState[2][2]) {
        setFinishedArrayState([0 * 3 + 0, 1 * 3 + 1, 2 * 3 + 2]);

      return gameState[0][0];
    }
    if (gameState[0][2] === gameState[1][1] && gameState[1][1] === gameState[2][0]) {
        setFinishedArrayState([0 * 3 + 2, 1 * 3 + 1, 2 * 3 + 0]);

      return gameState[0][2];
    }
    const isDrawMatch = gameState.flat().every((e) => {
      if (e === 'circle' || e === 'cross') return true;
    });
    if (isDrawMatch) return "draw";
    console.log(isDrawMatch);
    return null;
  }

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setFinishState(winner);
    }
  }, [gameState]);

if(!playOnline){
  return <div className='main-div'> 
    <button className='playOnline'> Play Online </button>
  </div>
}
  return (
    <div className='main-div'>
      <div className='move-detection'>
        <div className="left">YourSelf</div>
        <div className="right">Opponent</div>
      </div>
      <div >
        <h1 className='game-heading water-background'>Tic Tac Toe</h1>
        <div className='square-wrapper'>
          {
            gameState.map((arr, rowIndex) =>
              arr.map((e, colIndex) => {
                return <Square
                  finishedArrayState={finishedArrayState}
                  finishState={finishState}
                  // setFinishState={setFinishState}
                  currentPlayer={currentPlayer}
                  setCurrentPlayer={setCurrentPlayer}
                  setGameState={setGameState}
                  id={rowIndex * 3 + colIndex}
                  key={rowIndex * 3 + colIndex}
                />
              })
            )}
        </div>
        {
          finishState && finishState !== "draw" &&
          (<h3 className='finished-state'>{finishState} won the game </h3>
          )
        }
        {
          finishState && finishState === "draw" &&
          (<h3 className='finished-state'> It's a draw </h3>
          )
        }

      </div>
    </div>
  )
}
export default App;