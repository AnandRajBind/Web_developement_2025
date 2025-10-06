import React, { useEffect } from 'react'
import useCounter from '../CustomHook/useCounter';
import { useState } from 'react';


const Page1 = () => {
  const { data, increment, decrement, reset } = useCounter(0);
  const [apiData, setApiData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch('https://jsonplaceholder.typicode.com/posts').then(data => data.json()).then(res => {
      console.log(res);
      setApiData(res);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setLoader(false);
    })
  }, [])

  return (
    <>
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
      {loader && <div>Loading...............</div>}
      {
        apiData.map((item, index) => {
          return (
            <h3> {item.title}</h3 >
          );
        })
      }
    </>
  )
}

export default Page1;
