import React, { useState } from 'react'
import Faq from './Faq';
import useFaqStore from './store/useFaqStore';

const FaqGroup = () => {

    // const openQuestion =(id) => {
    //     setQuestion(questions.map((el) => el.id === id ? {...el , isOpen : !el.isOpen} : {...el, isOpen : false}));
    // }
    const { questions } = useFaqStore();
  return (
    <div className='p-10'>
        <h2 className='font-bold text-3xl mb-10'>React Frequently Asked Questions</h2>
        {questions.map((el) => <Faq key={el.id} faq={el}/>)}        
    </div>
  )
}

export default FaqGroup