import React, { useState } from "react";

const useCounter = (initialValue = 0) => {
    const [data, setData] = useState(initialValue);

    const increment = () => {
        setData(prev => prev + 1)
    }
    const decrement = () => {
        setData(prev => prev - 1)
    }
    const reset = () => {
        setData(initialValue)
    }

    return {data,increment,decrement,reset}
}
export default useCounter;