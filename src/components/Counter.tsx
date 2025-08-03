import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState<number>(0)

    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)
    const reset = () => setCounter(0)

    return (
      <>  
        <div>Counter: {counter}</div>
        <button onClick={increment}>inc</button>
        <button onClick={decrement}>dec</button>
        <button onClick={reset}>reset</button>
      </>
    )
}

export default Counter