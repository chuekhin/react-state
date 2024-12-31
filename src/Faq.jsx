import React, { useState } from 'react'
import useFaqStore from './store/useFaqStore'

const Faq = ({faq:{id, question , answer, isOpen}}) => {
  // const [open , setOpen] = useState(false);
  // const handleClick =() => {
  //   setOpen(!open)
  // }
  const { openQuestion } = useFaqStore();

  const handleClick = () => {
    openQuestion(id)
  }
  return (
    <div className='mb-7'>
        <div onClick={handleClick} className='flex justify-between items-center border-2 border-gray-400 px-4 py-2 rounded-lg'>
          <p className='select-none'>{question}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-5 ${isOpen === true ? "rotate-180" : ""}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
          <p className={`bg-gray-200 px-4 py-2 rounded-lg ${isOpen === false ? "hidden" : ""}` }>{answer}</p>
    </div>
  )
}

export default Faq