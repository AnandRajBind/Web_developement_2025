
import './App.css'
import { CounterStore } from './counterStore'

function App() {
  const count = CounterStore((state) => state.count);
  const increment = CounterStore((state) => state.increment);
  const decrement = CounterStore((state) => state.decrement);
  const increaseByX = CounterStore((state) => state.increaseByX);

  const handleMinusBtn = () => {
    decrement()
  }
  const handlePlusClick = () => {
    increment()
  }
  const handleIncreaseByX = () => {
    increaseByX(5)
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: '50px' }}>
        <div style={{ padding: '20px', border: '1px solid' }} onClick={handleMinusBtn} >-</div>{count}
        <div style={{ padding: '20px', border: '1px solid' }} onClick={handlePlusClick} >+</div>
        <br />
        <div onClick={handleIncreaseByX}>Increase by 5</div>
      </div>
    </>
  )
}

export default App
