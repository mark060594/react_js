import React from 'react'

export const Calculator = ({num1, num2, operator}) => {
    let resultado = 0;
console.log(num1);
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number' ){
        console.log('Datos erroneos, me cumpli1');
        resultado = 'Datos Erroneos';
    }else if(operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/' ){
        console.log('Datos erroneos me cumpli2');
        resultado = 'Datos Erroneos';
    }else {

        switch(operator) {
            case '+': 
                resultado = num1 + num2;
                break; 
            case '-': 
                 resultado = num1 - num2;    
                 break;

            case '*': 
                 resultado = num1 * num2;   
                 break;
                
            case '/': 
                 resultado = num1 / num2;    
                 break;

            default: 
                resultado = 'No se efectuo ninguna operación';
        }
    }

    return (
        <div>
            <h1> El resultado de {num1} {operator} {num2} = {resultado} </h1>
        </div>
    )
}


export default Calculator;