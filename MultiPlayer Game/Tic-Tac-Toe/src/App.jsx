
import React from 'react'
import Squire from './Square/Squire'
import './App.css'
import { useState } from 'react'

// Dummy data for rendering squares
const renderFrom = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const [gameState, setGameState] = useState(renderFrom)

function App() {
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
            gameState.map((arr) =>
              arr.map((e) => {
                return <Squire
                  setGameState={setGameState}
                  key={e}
                  value={e} />
              })
            )}
        </div>
      </div>
    </div>
  )
}

export default App