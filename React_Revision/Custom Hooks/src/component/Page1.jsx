import React  from 'react'
import useCounter from '../CustomHook/useCounter';

const Page1 = () => {
  const { data, increment, decrement, reset } = useCounter(0);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div style={{ marginTop: 20 }}>Page 1</div>
      <div style={{ marginLeft: 50 }}>
        <h2>Count: {data}</h2>
        <div style={{ display: 'flex', gap: 20 }}>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </form>
  )
}

export default Page1;
