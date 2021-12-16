import React, { useState } from 'react'

//Styles 
import './creditCard.css';

export const CreditCard = () => {


    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState('prueba');
    const [input3, setInput3] = useState(0);





    return (
        <div className='card-container'>
            <div className='inputs-container'>
                <input onChange={(e) => setInput1(e.target.value)} id='input1' type='number' value={input1}/>
                <input onChange={(e) => setInput2(e.target.value)} id='input1' type='string' value={input2}/>
                <input onChange={(e) => setInput3(e.target.value)} id='input1' type='number' value={input3}/>
            </div>
            <div className='p-container'>
                <p>{input1}</p>
                <p>{input2}</p>
                <p>{input3}</p>
            </div>
        </div>


    )


        
      
}
