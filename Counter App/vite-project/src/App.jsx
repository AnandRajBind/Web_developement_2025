import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
  }

  return (
    <>
      {/*Method 1: Direct State Update . Here React uses the current value of count from the render in which the function was created. Uses the value captured from the current render.*/}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <p>{count}</p>

      {/* Method 2: Functional Update.
 Here React doesn't use the count variable directly.
Instead, React provides the latest state value (prevCount) when processing the update.Uses the latest updated value each time. */}
      <button onClick={handleIncrement}>
        Increment
      </button>

      <button onClick={handleDecrement}>
        Decrement
      </button>
      <p>{count}</p>

    </>
  )
}

export default App;