import { increment, decrement } from './redux/counterAction'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {

  // by using useDispatch() hook calling the action function
  const dispatch = useDispatch();

  // global state value get 
  const data = useSelector((state) => state.count)



  const handleMinusBtn = () => {
    dispatch(decrement())
  }
  const handlePlusBtn = () => {
    dispatch(increment())
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: '50px' }}>

      <div style={{ padding: '20px', border: '1px solid' }} onClick={handleMinusBtn}>-</div>{data}
      <div style={{ padding: '20px', border: '1px solid' }} onClick={handlePlusBtn}>+</div>
    </div>
  )
}

export default App
