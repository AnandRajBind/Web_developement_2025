import React from "react";
import { useLoaderData } from "react-router";
// import { useState, useEffect } from "react";

function HomePage() {
//   const [data, setData] = useState([]);
//   const fetchApi = async () => {
//     const response = await ((await fetch('https://jsonplaceholder.typicode.com/todos/1')).json());
//     return response;
//   };
//   useEffect(() => {
//     fetchApi();
//   }, []);

const data = useLoaderData();
  return (
    <>
      <div>HomePage</div>
      <small>{JSON.stringify(data)}</small>
    </>
  )
}
export default HomePage;
