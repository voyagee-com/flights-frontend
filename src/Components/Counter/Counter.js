import React, { useState, useEffect } from 'react'
import { StyledCounter } from './Conter.style'

const Counter = ({ label, id, min = 1, value, onClick, onChange, ...rest}) => {

  const [currentValue, setCurrentValue ] = useState(value)

  const handleChange = internalChange => 
  (e, value) => {
    console.log('change', value);
    e.preventDefault()
    setCurrentValue(currentValue +1)
    if (internalChange === undefined) {
      return
    }
    return internalChange(e)
  }

  // const handleClick = internalHandler => (e) => {
  //   e.preventDefault()

  //   if(e.target.id === 'decrement') {
  //     setCurrentValue(currentValue -1)
  //   } else {
  //     setCurrentValue(currentValue +1)
  //   }

  //   if (internalHandler === undefined) {
  //     return
  //   }
  //   return internalHandler(e)
  // }



  return (
    <StyledCounter>
      <label htmlFor={id}>{label}</label>
      <button 
        id="decrement" 
        aria-label="Decrement value"
        onClick={(e) => handleChange(e, -1)}
      >-</button>
      <input
        type="number"
        min={min}
        name={id} 
        name={id}
        value={currentValue}
        {...rest}
        onChange={handleChange(onChange)}
      />
      <button 
        id="increment" 
        aria-label="Increment Value"
        onClick={(e) => handleChange(e, 1)}
      >+</button>
    </StyledCounter>
  )
}

export default Counter
