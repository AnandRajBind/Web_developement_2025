import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, increaseByXAmount } from './CounterSlice'
import './App.css'


function App() {
  const counterData = useSelector(state => state.counter.counter)
  console.log(counterData);
  const dispatch = useDispatch();

  const handleMinusBtn = () => {
    dispatch(decrement());
  }
  const handlePlusClick = () => {
    dispatch(increment())
  }
  const handleIncreaseByX = () => {
    dispatch(increaseByXAmount(5))
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: '50px' }}>

        <div style={{ padding: '20px', border: '1px solid' }} onClick={handleMinusBtn} >-</div>{counterData}
        <div style={{ padding: '20px', border: '1px solid' }} onClick={handlePlusClick} >+</div>
        <br />
        <div onClick={handleIncreaseByX}>Increase by 5</div>
      </div>
    </>
  )
}
export default App
