import React, { useState } from 'react'

const App = () => {
  const [count , setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1) 
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }
  
  return (
    <div className='m-10'>
      <h3 className='text-7xl font-bold mb-3'>{count}</h3>
      <div className='flex gap-3'>
        <button onClick={handleIncrement} className='px-4 py-2 bg-black text-white'>Increment</button>
        <button onClick={handleDecrement} className='px-4 py-2 bg-black text-white'>
        Decrement</button>
      </div>
    </div>
  )
}

export default App