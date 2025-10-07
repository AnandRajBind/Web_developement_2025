import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {

  const [data, setData] = useState([]);
  const [asyncData, setAsyncData] = useState([]);


  // Synchronous call 
  const fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      console.log(res);
      setData(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    fetchData();
  }, []);

  // Asynchronous call 

  useEffect(() => {
  const fetchAsyncData = async () => {
    try {
      const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(data);
      setAsyncData(data.data);
    } catch (err) {
      console.log(err);
    }
  }
  // method call 
    fetchAsyncData();
  }, [])


  return (
    <>
      <h1> GET API call by using axios library (ByDefault axios is Synchronous) </h1>
      {
        data.map((item, index) => {
          return (<div>{item.title}</div>)
        })
      }
      <h1> GET API call by using axios library (Asynchronous Way) </h1>
      {
        asyncData.map((item, index) => {
          return (<div>{item.title}</div>)
        })
      }
    </>
  )
}

export default App
