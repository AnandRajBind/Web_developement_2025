import { useState } from 'react'

import './index.css'
import './App.css'

import Addtodo from './components/Addtodo'
import Todos from './components/todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 >Learn redux ToolKit </h1>
    <Addtodo />
    <Todos />
    </>
  )
}

export default App
