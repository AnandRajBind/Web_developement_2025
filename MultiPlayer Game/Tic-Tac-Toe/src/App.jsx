
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
  const checkWinner = () => {
    // row dynamic check
    for (let row = 0; row < gameState.length; row++) {
      if (gameState[row][0] === gameState[row][1] && gameState[row][1] === gameState[row][2]) {
        return gameState[row][0];
      }
    }
    // column dynamic check
    for (let col = 0; col < gameState.length; col++) {
      if (gameState[0][col] === gameState[1][col] && gameState[1][col] === gameState[2][col]) {
        return gameState[0][col];
      }
    }
  }
  useEffect(() => {
    const winner = checkWinner();
    if (winner === "circle" || winner === "cross") {
      setFinishState(winner);
      console.log(winner);
    }
  },[gameState]);
  
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
      </div>
    </div>
  )
}
export default App;