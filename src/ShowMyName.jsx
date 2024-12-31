import React, { useState } from 'react'

const ShowMyName = () => {
    const [name , setName] =  useState("");
    const handleChue = () => {
        setName(name + "Chue ")
    }
    
    const handleMyatnoe = () => {
        setName(name + "Myatnoe ")
    }

    const handleKhin = () => {
        setName(name + "Khin ")
    }

    const handleClear  = () => {
        setName("")
    }
  return (
    <div className='p-5'>
        <h1 className='text-xl font-bold'>My name is "{name}"</h1>
        <button onClick={handleChue} className='bg-green-200 px-3 py-2'>Chue </button>
        <button onClick={handleMyatnoe} className='bg-green-200 px-3 py-2'>Myatnoe</button>
        <button onClick={handleKhin} className='bg-green-200 px-3 py-2'>Khin </button>
        <button onClick={handleClear} className='bg-green-200 px-3 py-2'>Clear </button>
    </div>
    
  )
}

export default ShowMyName